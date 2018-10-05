using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class UserContext: IdentityDbContext<IdentityUser>
    {
        public UserContext(DbContextOptions options)
            : base(options) { }
    }
}
