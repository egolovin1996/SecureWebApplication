using System;
using Repository.Interfaces;

namespace Repository.Base
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

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
