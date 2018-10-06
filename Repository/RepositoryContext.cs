﻿using Microsoft.EntityFrameworkCore;
using Model.Vulnerability;
using Model.Identity;
using Repository.InternalModels;

namespace Repository
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Vulnerability> Vulnerabilities { get; set; }
        internal DbSet<User> Users { get; set; }

        public RepositoryContext(DbContextOptions<RepositoryContext> options) 
            : base(options) { }
    }
}
