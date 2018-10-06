using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repository.InternalModels;
using Repository.Helpers;
using Model.Identity;

namespace Repository
{
    public static class DbInitializer
    {
        public static void Initialize(RepositoryContext context)
        {
            context.Database.Migrate();

            if (context.Users.Count() == 0)
            {
                context.Users.Add(new User()
                {
                    // Можно вынести логин и пароль в кофиг
                    Name = "admin",
                    PasswordHash = IdentityHelper.GetPasswordHash("admin"),
                    Role = Role.Admin
                });

                context.SaveChanges();
            }
        }
    }
}
