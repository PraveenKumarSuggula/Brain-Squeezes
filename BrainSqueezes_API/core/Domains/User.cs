using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Core_Models.Domains
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }
        public string LastName  { get; set; }
        public string UserName  { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }

        [JsonIgnore]
        public List<Questions>? Questions { get; set; }

        [JsonIgnore]
        public List<Answers>? Answers { get; set; }

    }
}
