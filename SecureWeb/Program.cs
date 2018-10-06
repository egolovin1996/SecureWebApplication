using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Repository.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Repository;
using System.Threading.Tasks;

namespace SecureWeb
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");
            var config = builder.Build();

            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var factory = services.GetRequiredService<IRepositoryContextFactory>();
                using (var context = factory.CreateDbContext(config.GetConnectionString("PostgreSQLConnection")))
                {
                    // Накатываем все миграции которых нет в базе
                    // И инициализируем необходимые данные
                    DbInitializer.Initialize(context);
                }
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                   .UseStartup<Startup>()
                   .Build();
    }
}
