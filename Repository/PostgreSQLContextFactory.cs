using Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

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

        public UserContext CreateIdentityContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<UserContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new UserContext(optionsBuilder.Options);
        }
    }
}
