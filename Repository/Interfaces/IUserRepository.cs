﻿using Model.Identity;
using System.Collections.Generic;

namespace Repository.Interfaces
{
    public interface IUserRepository
    {
        void CreateUser(UserCreateModel user);
        void DeleteUser(int id);
        UserDisplayModel GetUser(int id);
        UserDisplayModel GetUser(string name);
        UserDisplayModel GetUser(string name, string password);
        IEnumerable<UserDisplayModel> GetAllUsers();
    }
}
