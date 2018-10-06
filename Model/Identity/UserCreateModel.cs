using System;
namespace Model.Identity
{
    public class UserCreateModel
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
}
