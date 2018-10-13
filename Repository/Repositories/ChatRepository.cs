using Repository.Repositories.Base;
using Repository.Interfaces;
using Model.Chat;
using System.Linq;
using System.Collections.Generic;
using System;

namespace Repository.Repositories
{
    public class ChatRepository : BaseRepository, IChatRepository
    {
        public ChatRepository(string connectionString, IRepositoryContextFactory contextFactory) 
            : base(connectionString, contextFactory) { }

        public void AddChat(Chat chat)
        {
            Context.Chats.Add(chat);
            Context.SaveChanges();
        }

        public void AddMessage(Message message)
        {
            message.Date = DateTime.Now;
            Context.Messages.Add(message);
            Context.SaveChanges();
        }

        public void AddMessage(Message message, int ChatId)
        {
            message.ChatId = ChatId;
            AddMessage(message);
        }

        public void DeleteChat(int id)
        {
            var chat = Context.Chats.Single(c => c.Id == id);
            Context.Chats.Remove(chat);
            Context.SaveChanges();
        }

        public void DeleteMessage(int id)
        {
            var message = Context.Messages.Single(m => m.Id == id);
            Context.Messages.Remove(message);
            Context.SaveChanges();
        }

        public IEnumerable<Chat> GetChats() => Context.Chats;

        public IEnumerable<Message> GetMessages(int chatId) => Context.Messages.Where(m => m.ChatId == chatId);
    }
}
