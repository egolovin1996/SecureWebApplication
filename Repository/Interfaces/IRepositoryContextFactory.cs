namespace Repository.Interfaces
{
    public interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
        UserContext CreateIdentityContext(string connectionString);
    }
}
