using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Http;

namespace Core_Models.Domains
{
    public class BlobFile
    {
        public string file { get; set; }
    }

    public class UploadFile
    {
        [NotMapped]
        public IFormFile? file { get; set; }

        [NotMapped]
        public string? authorName { get; set; }
        public int uid { get; set; }
        public string? qid { get; set; }
        public string categoryId { get; set; }
        public string? extension { get; set; }
        public string? file_id { get; set; }
        public int? rating { get; set; }
        public string description { get; set; }
        public string title { get; set; }

        [JsonIgnore]
        [ForeignKey("uid")]
        public User? User { get; set; }

        [JsonIgnore]
        [ForeignKey("categoryId")]
        public Categories? Categories { get; set; }
    }

    public class Questions : UploadFile
    {
        [Key]   
        public string qid { get; set; }
    }

    public class Answers : UploadFile
    {
        [Key]
        public int aid { get; set; }

        [JsonIgnore]
        [ForeignKey("qid")]
        public Questions? Questions { get; set; }
    }

    public class Categories
    {
        [Key]
        public string cid { get; set; }
        public string cname { get; set; }

        [JsonIgnore]
        public List<Questions>? Questions { get; set; }

        [JsonIgnore]
        public List<Answers>? Answers { get; set; }
    }


}
