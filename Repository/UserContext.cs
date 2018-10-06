using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Repository
{
    public class UserContext: IdentityDbContext<User>
    {
        public UserContext(DbContextOptions options)
            : base(options) { }
    }
}
