using System;
using Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class PostgreSQLContextFactory: IRepositoryContextFactory
    {
        public RepositoryContext CreateDbContext(string connectionString)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>();
            optionsBuilder.UseNpgsql(connectionString);

            return new RepositoryContext(optionsBuilder.Options);
        }
    }
}
