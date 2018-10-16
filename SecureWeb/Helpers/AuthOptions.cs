using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace SecureWeb.Helpers
{
    public static class AuthOptions
    {
        public const string Issuer = "SecureWebApplication";
        public const string Audience = "SecureUser";
        public const int Lifetime = 60;

        const string Key = "super_very_mega_secure_key";

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));
        }
    }
}
