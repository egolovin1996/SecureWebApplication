using Model.Identity;
using System.Collections.Generic;

namespace Repository.Interfaces
{
    public interface IUserRepository
    {
        void Add(User user);
        void Delete(int id);
        IEnumerable<User> GetAll();
    }
}
