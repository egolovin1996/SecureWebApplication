using Microsoft.EntityFrameworkCore;
using Model.Vulnerability;
using Model.Chat;
using Repository.InternalModels;

namespace Repository
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Vulnerability> Vulnerabilities { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Chat> Chats { get; set; }

        internal DbSet<User> Users { get; set; }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) 
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(p => new { p.Name })
                .IsUnique();
        }
    }
}
