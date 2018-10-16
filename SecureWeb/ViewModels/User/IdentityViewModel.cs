using System.ComponentModel.DataAnnotations;

namespace SecureWeb.ViewModels.User
{
    public class IdentityViewModel
    {
        [Required]
        [Display(Name = "Имя пользолвателя")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "Пароль")]
        public string Password { get; set; }
    }
}
