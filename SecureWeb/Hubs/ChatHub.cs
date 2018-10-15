using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Model.Chat;

namespace SecureWeb.Hubs
{
    //[Authorize]
    public class ChatHub : Hub
    {
        public async Task SendToChat(int chatId)
        {
            await Clients.Others.SendAsync("NewMessage", chatId);
        }
    }
}
