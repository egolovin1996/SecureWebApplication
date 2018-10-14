using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Model.Identity;
using Model.Menu;
using SecureWeb.Helpers;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SecureWeb.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    { 
        [Authorize]
        [HttpGet]
        [Route("getMenuItems")]
        public IActionResult GetMenuItems()
        {
            var menuItems = new List<MenuItem>
            {
                new MenuItem
                {
                    Route = "/vulnerabilities",
                    Name = "Уязвимости"
                },
                new MenuItem
                {
                    Route = "/chat",
                    Name = "Чаты"
                }
            };

            if(User.IsInRole(EnumHelper.RoleToString(Role.Admin))){
                menuItems.Add(new MenuItem()
                {
                    Route = "/admin",
                    Name = "Администрирование"
                });
            }

            return Ok(menuItems);
        }
    }
}
