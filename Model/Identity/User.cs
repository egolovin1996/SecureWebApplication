using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Model.Identity
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [Description("Имя пользователя")]
        public string Name { get; set; }

        [Required]
        [Description("Хэш пароля")]
        public string PasswordHash { get; set; }

        [Required]
        [Description("Роль")]
        public Role Role { get; set; }
    }
}
