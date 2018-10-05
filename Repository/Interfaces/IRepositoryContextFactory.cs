using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Repository.Interfaces
{
    public interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
        UserContext CreateIdentityContext(string connectionString);
    }
}
