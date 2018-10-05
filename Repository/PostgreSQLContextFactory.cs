using Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Repository
{
    public class PostgreSqlContextFactory: IRepositoryContextFactory
    {
        public RepositoryContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new RepositoryContext(optionsBuilder.Options);
        }

        public IdentityDbContext CreateIdentityContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new IdentityDbContext(optionsBuilder.Options);
        }
    }
}
