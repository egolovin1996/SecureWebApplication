using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Model.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repository.InternalModels
{
    internal class User
    {
        public int Id { get; set; }

        [Required]
        [Description("Имя пользователя")]
        [StringLength(100)]
        //[Index(IsUnique = true)]
        public string Name { get; set; }

        [Required]
        [Description("Хэш пароля")]
        public string PasswordHash { get; set; }

        [Required]
        [Description("Роль")]
        public Role Role { get; set; }
    }
}
