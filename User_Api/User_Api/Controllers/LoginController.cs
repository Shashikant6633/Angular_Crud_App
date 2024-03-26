using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using User_Api.Models;
using User_Api.Services;

namespace User_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly UserDbContext _context; // Inject UserDbContext

        public LoginController(AuthService authService, UserDbContext context) // Inject UserDbContext
        {
            _authService = authService;
            _context = context; // Assign injected context to local variable
        }

        [HttpPost("login")]
        public IActionResult Login(Models.LoginModel model)
        {
            // Validate user credentials
            var user = GetUserFromDatabase(model.Username, model.Password);
            if (user == null)
            {
                // Invalid credentials
                return Unauthorized(new { message = "Invalid username or password" });
            }

            // User authenticated successfully
            // Generate JWT token
            var token = GenerateJwtToken(user);

            // Return token to client
            return Ok(new { token });
        }

        // Helper method to retrieve user from database
        private User GetUserFromDatabase(string username, string password)
        {
            // Query the database to find a user with the provided username/email and password
            return _context.Users.FirstOrDefault(u => u.Email == username && u.Password == password);
        }

        // Generate JWT token for authentication
        private string GenerateJwtToken(User user)
        {
            // Generate JWT token using user information
            // You can use libraries like System.IdentityModel.Tokens.Jwt for JWT token generation
            // Example code for token generation:
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("your-secret-key-with-at-least-128-bits"); // Ensure the key has at least 128 bits
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.Name, user.Name),
                    // Add additional claims as needed
                }),
                Expires = DateTime.UtcNow.AddDays(7), // Token expiration time
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
