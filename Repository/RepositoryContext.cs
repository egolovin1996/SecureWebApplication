using Microsoft.EntityFrameworkCore;
using Model.Vulnerability;
using Model.Identity;

namespace Repository
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Vulnerability> Vulnerabilities { get; set; }
        public DbSet<User> Users { get; set; }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) 
            : base(options) { }
    }
}
