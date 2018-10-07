using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model.Identity;
using Repository.Interfaces;
using SecureWeb.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
        [Route("createUser")]
        public IActionResult CreateUser([FromBody] RegisterViewModel model)
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

        [Authorize]
        [HttpGet]
        [Route("getAllUsers")]
        public IEnumerable<UserDisplayModel> GetAllUsers()
        {
            return _repository.GetAllUsers().ToList();
        }

        [HttpPost]
        [Route("getToken")]
        public IActionResult GetToken([FromBody] IdentityViewModel model)
        {
            var user = _repository.GetUser(model.UserName, model.Password);
            if (user == null) return Unauthorized();

            // Todo разнести код
            ClaimsIdentity identity = null;
            var claims = new List<Claim> 
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Name)
            };
            identity = new ClaimsIdentity(
                claims,
                "Token",
                ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);


            var dateTime = DateTime.Now;
            var token = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: dateTime,
                claims: identity.Claims,
                expires: dateTime.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(
                    AuthOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));

            var result = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(result);
        }
    }
}
