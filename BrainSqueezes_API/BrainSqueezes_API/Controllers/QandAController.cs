using Azure.Storage.Blobs;
using Core_Models.Domains;
using Data_Layer.AppDbContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BrainSqueezes_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QandAController : Controller
    {
        private readonly IConfiguration _config;
        private readonly BrainSqueezesContext _context;

        public QandAController(IConfiguration config, BrainSqueezesContext context)
        {
            _config = config;
            _context = context;
        }

        [HttpPost("GetQandAList")]
        public async Task<IActionResult> GetQandAList(QandACheckObj QandA)
        {

            try
            {
                if (QandA == null)
                {
                    return BadRequest();
                }
                else
                {
                    if (QandA?.type.ToLower() == "question")
                    {
                        var questionsList = await _context.questions.Where(x => x.uid == QandA.uid).ToListAsync();

                        foreach (var question in questionsList)
                        {
                            var authorDetails = _context.Users.FirstOrDefault(u => u.Id == question.uid);
                            var authorName = authorDetails.FirstName + " " + authorDetails.LastName;
                            question.authorName = authorName;
                        }

                        return Ok(questionsList);
                    }
                    else if (QandA?.type.ToLower() == "answer")
                    {
                        var questionsList = await _context.answers.Where(x => x.qid == QandA.qid).ToListAsync();
                        return Ok(questionsList);
                    }
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Sql server error");
            }
            return BadRequest();
        }
    }
}
