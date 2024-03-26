using Microsoft.EntityFrameworkCore;

namespace User_Api.Models
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }

        // Define your entity DbSet properties here
        public DbSet<User> Users { get; set; }
    }
}
