using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using SecureWeb.ViewModels;
using Model;

namespace SecureWeb.Controllers
{
    public class AccountController : Controller
    {
        readonly UserManager<User> _userManager;

        public AccountController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route("api/[controller]/register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel molel)
        {
            if (!ModelState.IsValid) throw new Exception();

            var user = new User()
            {
                Email = molel.Email,
                UserName = molel.UserName
            };
            var result = await _userManager.CreateAsync(user, molel.Password);

            if(!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);
                return BadRequest(errors);
            }

            return Ok();
        }
    }
}
