using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Model.Identity;
using Repository.Interfaces;
using SecureWeb.ViewModels.User;
using System.IdentityModel.Tokens.Jwt;
using SecureWeb.Helpers;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

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
        [Route("register")]
        public IActionResult Register([FromBody] RegisterViewModel model)
        {
            var user = new UserCreateModel()
            {
                Name = model.UserName,
                Password = model.Password,
                Role = Role.User
            };
            _repository.CreateUser(user);

            return Ok();
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        [Route("createUser")]
        public IActionResult CreateUser([FromBody] CreateViewModel model)
        {
            _repository.CreateUser(new UserCreateModel()
            {
                Name = model.UserName,
                Role = model.Role,
                Password = model.Password
            });

            return Ok();
        }

        [Authorize(Roles = "admin")]
        [HttpGet]
        [Route("deleteUser/{id}")]
        public IActionResult DeleteUser(int id)
        {
            _repository.DeleteUser(id);

            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("getAllUsers")]
        public IEnumerable<UserViewModel> GetAllUsers()
        {
            return _repository.GetAllUsers().Select(u => new UserViewModel()
            {
                Id = u.Id,
                Name = u.Name,
                Role = EnumHelper.RoleToString(u.Role)
            }).ToList();
        }

        [HttpPost]
        [Route("getToken")]
        public IActionResult GetToken([FromBody] IdentityViewModel model)
        {
            var user = _repository.GetUser(model.UserName, model.Password);
            if (user == null) return Unauthorized();

            // Todo: разнести код
            ClaimsIdentity identity = null;
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Name),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, EnumHelper.RoleToString(user.Role))
            };
            identity = new ClaimsIdentity(
                claims,
                "Token",
                ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);


            var dateTime = DateTime.Now;
            var token = new JwtSecurityToken(
                issuer: AuthOptions.Issuer,
                audience: AuthOptions.Audience,
                notBefore: dateTime,
                claims: identity.Claims,
                expires: dateTime.Add(TimeSpan.FromMinutes(AuthOptions.Lifetime)),
                signingCredentials: new SigningCredentials(
                    AuthOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));

            var encodedToken = new JwtSecurityTokenHandler().WriteToken(token);

            var result = new
            {
                token = encodedToken,
                username = identity.Name
            };

            return Ok(result);
        }
    }
}
