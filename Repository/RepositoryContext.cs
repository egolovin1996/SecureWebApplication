using Microsoft.EntityFrameworkCore;
using Model;

namespace Repository
{
    public class RepositoryContext: DbContext
    {
        public DbSet<Vulnerability> Vulnerabilities { get; set; }

        public RepositoryContext(DbContextOptions options) 
            : base(options) { }
    }
}
