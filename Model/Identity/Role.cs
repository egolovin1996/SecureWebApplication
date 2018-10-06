using System.ComponentModel;

namespace Model.Identity
{
    public enum Role
    {
        [Description("Администратор")]
        Admin = 0,

        [Description("Пользователь")]
        User = 1
    }
}
