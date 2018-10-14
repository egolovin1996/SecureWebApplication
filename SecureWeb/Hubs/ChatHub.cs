using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Model.Chat;

namespace SecureWeb.Hubs
{
    //[Authorize]
    public class ChatHub : Hub
    {
        public async Task SendToChat(Message message, string chatId)
        {
            await Clients.Group(chatId).SendAsync("Send", message);
        }

        public async Task AddToChat(string chatId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, chatId);
            await Clients.Group(chatId).SendAsync(
                "Send", $"{Context.ConnectionId} пользователь присоеденился к чату({chatId}).");
        }

        public async Task RemoveFromGroup(string chatId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, chatId);

            await Clients.Group(chatId).SendAsync(
                "Send", $"{Context.ConnectionId} пользователь покинул чат {chatId}.");
        }
    }
}
