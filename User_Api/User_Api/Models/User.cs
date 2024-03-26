using System.ComponentModel.DataAnnotations;

namespace User_Api.Models
{
    public class User
    {
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        [MinLength(6)]
        public string Password { get; set; }
    }
}
