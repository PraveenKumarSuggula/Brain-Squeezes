
using Core_Models.Domains;
using Microsoft.EntityFrameworkCore;

namespace Data_Layer.AppDbContext
{
    public class BrainSqueezesContext: DbContext
    {
        public BrainSqueezesContext(DbContextOptions<BrainSqueezesContext> options): base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Questions> questions { get; set; }
        public DbSet<Answers> answers { get; set; }
        public DbSet<Categories> categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<User>().ToTable("users");

           modelBuilder.Entity<Questions>().ToTable("questions");
           
           modelBuilder.Entity<Answers>().ToTable("answers");
           
           modelBuilder.Entity<Categories>().ToTable("categories");
        }

    }
}
