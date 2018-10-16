using System;
using Model.Identity;

namespace SecureWeb.Helpers
{
    public static class EnumHelper
    {
        public static string RoleToString(Role role){
            switch(role){
                case Role.Admin:
                    return "admin";
                case Role.User:
                    return "user";
                default:
                    throw new NotImplementedException();
            }
        }
    }
}
