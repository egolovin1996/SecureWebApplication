using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace SecureWeb.Helpers
{
    public static class AuthOptions
    {
        public const string ISSUER = "SecureWebApplication";
        public const string AUDIENCE = "SecureUser";
        public const int LIFETIME = 60;

        const string KEY = "super_very_mega_secure_key";

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
