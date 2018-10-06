using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model.Identity;
using Repository.Interfaces;
using SecureWeb.ViewModels;

namespace SecureWeb.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        readonly IUserRepository _repository;

        public AccountController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("createUser")]
        public IActionResult CreateUser(RegisterViewModel model)
        {
            var user = new UserCreateModel()
            {
                Name = model.UserName,
                Password = model.Password
            };
            _repository.CreateUser(user);

            return Ok();
        }

        [HttpGet]
        [Route("deleteUser")]
        public IActionResult DeleteUser(int id)
        {
            _repository.DeleteUser(id);

            return Ok();
        }

        [HttpGet]
        [Route("getAllUsers")]
        public IEnumerable<UserDisplayModel> GetAllUsers()
        {
            return _repository.GetAllUsers().ToList();
        }
    }
}
