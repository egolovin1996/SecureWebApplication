using System;
using Repository.Interfaces;

namespace Repository.Repositories.Base
{
    public abstract class BaseRepository: IDisposable
    {
        protected IRepositoryContextFactory ContextFactory { get; }
        protected RepositoryContext Context { get; }

        protected BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            ContextFactory = contextFactory;
            Context = ContextFactory.CreateDbContext(connectionString);
        }

        private bool _disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this._disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
