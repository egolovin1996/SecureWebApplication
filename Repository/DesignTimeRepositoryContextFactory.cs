using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Repository
{
    // Необходимо для утилиты миграции
    // Для создания миграции из папки с проектом Repository
    // dotnet ef migrations add Initial --startup-project ../SecureWeb/SecureWeb.csproj
    // Для применения миграции
    // dotnet ef database update --startup-project ../SecureWeb/SecureWeb.csproj
    public class DesignTimeRepositoryContextFactory : IDesignTimeDbContextFactory<RepositoryContext>
    {
        public RepositoryContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                  .AddJsonFile("appsettings.json");

            var config = builder.Build();
            var connectionString = config.GetConnectionString("PostgreSQLConnection");
            var repositoryFactory = new PostgreSqlContextFactory();

            return repositoryFactory.CreateDbContext(connectionString);
        }
    }
}
