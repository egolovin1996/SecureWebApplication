using System;
using System.Text;
using System.Security.Cryptography;

namespace Repository.Helpers
{
    public static class IdentityHelper
    {
        public static string GetPasswordHash(string password){
            var sha256 = new SHA256Managed();
            var passwordHash = Convert
                .ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));

            return passwordHash;
        }

        //public static string GetIdentity(){

        //}
    }
}
