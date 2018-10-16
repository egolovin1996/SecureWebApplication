using Model.Chat;
using System.Collections.Generic;

namespace Repository.Interfaces
{
    public interface IChatRepository
    {
        void AddChat(Chat chat);
        void DeleteChat(int id);
        IEnumerable<ChatDisplayModel> GetChats();
        void AddMessage(Message message);
        void AddMessage(Message message, int chatId);
        void DeleteMessage(int id);
        IEnumerable<Message> GetMessages(int chatId);
    }
}
