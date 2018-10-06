using System.Collections.Generic;
using System.Linq;
using Model.Identity;
using Repository.Interfaces;
using Repository.Repositories.Base;
using Repository.Helpers;
using Repository.InternalModels;

namespace Repository.Repositories
{
    public class UserRepository: BaseRepository, IUserRepository
    {
        public UserRepository(string connectionString, IRepositoryContextFactory contextFactory) 
            : base(connectionString, contextFactory) { }

        public void CreateUser(UserCreateModel user)
        {
            var userForCreate = new User()
            {
                Name = user.Name,
                Role = user.Role,
                PasswordHash = IdentityHelper.GetPasswordHash(user.Password)
            };
            Context.Users.Add(userForCreate);
            Context.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            var user = Context.Users.Single(u => u.Id == id);
            Context.Users.Remove(user);
            Context.SaveChanges();
        }

        public IEnumerable<UserDisplayModel> GetAllUsers()
        {
            // Реализовать эксплисит
            return Context.Users.Select(u => UserToDisplayModel(u));
        }

        public UserDisplayModel GetUser(int id)
        {
            var user = Context.Users.Single(u => u.Id == id);
            return UserToDisplayModel(user);
        }

        public UserDisplayModel GetUser(string name)
        {
            var user = Context.Users.Single(u => u.Name == name);
            return UserToDisplayModel(user);
        }

        private UserDisplayModel UserToDisplayModel(User user) 
            => new UserDisplayModel()
                {
                    Id = user.Id,
                    Name = user.Name
                };
    }
}
