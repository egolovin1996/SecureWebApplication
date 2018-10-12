using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Model.Identity;

namespace SecureWeb.ViewModels
{
    public class CreateUserViewModel
    {
        [Required]
        [Display(Name = "Имя пользолвателя")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Имя пользолвателя")]
        public Role Role { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Пароль")]
        public string Password { get; set; }

        [Required]
        [Compare("Password", ErrorMessage = "Пароли не совпадают")]
        [DataType(DataType.Password)]
        [Display(Name = "Подтвердить пароль")]
        public string PasswordConfirm { get; set; }
    }
}
