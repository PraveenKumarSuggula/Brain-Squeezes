using Microsoft.AspNetCore.Mvc;
using Core_Models.Domains;
using Azure.Storage.Blobs;
using Data_Layer.AppDbContext;
using Microsoft.EntityFrameworkCore;

namespace BrainSqueezes_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class FileUploadController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly Response<string> _response;
        private readonly BrainSqueezesContext _context; 

        public FileUploadController(IConfiguration config, BrainSqueezesContext context) 
        {
            _config = config;
            _context = context;
            _response = new Response<string>();
        }

        [HttpPost("fileDetails")]
        public async Task<Response<string>> GetBlobFile(QandACheckObj fileDetails)
        {

            _response.Errors ??= new Dictionary<string, string[]>();

            string Connection = _config.GetConnectionString("ConnectionStringsForBlobStorage");

            try 
            {
                string containerName = "";
                //string blobId = "";

                //blobId = "1" + "/" + "14a964c7-b44c-46e7-af94-c81255b81323" + "_" + "men" + ".jpeg";
                //blobId = "2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png";

                containerName = _config.GetConnectionString("QuestionsContainerName");

                BlobContainerClient blobClient = new BlobContainerClient(Connection, containerName);

                BlobClient file = blobClient.GetBlobClient(fileDetails.file_id);

                if (await file.ExistsAsync())
                {
                    var downloadContent = await file.DownloadAsync();
                    var fileObj = await _context.questions.FirstOrDefaultAsync(x => x.file_id == fileDetails.file_id);
                    using (MemoryStream ms = new MemoryStream())
                    {
                        await downloadContent.Value.Content.CopyToAsync(ms);

                        //_response.Result = ms.GetBuffer();
                        _response.Result = "data:" + fileObj?.extension + ";base64," + Convert.ToBase64String(ms.GetBuffer());
                        //_response.Result = "data:image/" + ".png" + ";base64," + Convert.ToBase64String(ms.GetBuffer());

                        return _response;
                    }
                }
                else
                {
                    _response.Errors.Add("BlobError", new string[] { "Document does not exists" });
                }

            }
            catch (Exception ex)
            {
                _response.Errors.Add("BlobError", new string[] { ex.Message });
            }

            return _response;
        }

        [HttpPost]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> UploadBlobFile([FromForm] UploadFile fileObject)
        {
            _response.Errors ??= new Dictionary<string, string[]>();

            //Save fuctionalit start here 
            string Connection = _config.GetConnectionString("ConnectionStringsForBlobStorage");
            string AnsContainerName = _config.GetConnectionString("AnswersContainerName");
            string QueContainerName = _config.GetConnectionString("QuestionsContainerName");
            string ProfilesContainerName = _config.GetConnectionString("ProfilepicsContainerName");
            Stream myBlob = new MemoryStream();
            IFormFile file = fileObject.file;

            if (file != null)
            {
                myBlob = file.OpenReadStream();

                string guid = Guid.NewGuid().ToString();

                string blobId = fileObject.uid + "/" + guid + "_" + file.FileName;

                BlobContainerClient blobClient = new BlobContainerClient(Connection, QueContainerName);

                BlobClient blob = blobClient.GetBlobClient(blobId);

                await blob.UploadAsync(myBlob);

                if (await blob.ExistsAsync())
                {
                    Questions questions = new Questions();
                    questions.qid = fileObject.qid;
                    questions.uid = fileObject.uid;
                    questions.categoryId = fileObject.categoryId;
                    questions.extension = file.ContentType;
                    questions.file_id = blobId;
                    questions.rating = 0;
                    questions.title = fileObject.title;
                    questions.description = fileObject.description;
                    await _context.questions.AddAsync(questions);
                    await _context.SaveChangesAsync();
                    return Ok(new { message = "file uploaded successfuly", Object = questions });
                }
                else
                {
                    _response.Errors.Add("BolbError", new string[] { "Error occured while saving file into blob" });
                }
            }
            return BadRequest(new { message = "Invalid Image" });

        }

    }
}
