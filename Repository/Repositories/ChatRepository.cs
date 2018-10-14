using Repository.Repositories.Base;
using Repository.Interfaces;
using Model.Chat;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;

namespace Repository.Repositories
{
    public class ChatRepository : BaseRepository, IChatRepository
    {
        public ChatRepository(string connectionString, IRepositoryContextFactory contextFactory)
            : base(connectionString, contextFactory) { }

        public void AddChat(Chat chat)
        {
            var date = DateTime.Now;
            var initialMessage = new Message()
            {
                Text = $"Чат создан {date.ToString("dd.MM.yyyy HH:mm:ss")}",
                Date = date
            };
            chat.Messages.Add(initialMessage);
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

        public IEnumerable<ChatDisplayModel> GetChats() {
            var chats = Context.Chats.Select(c => new ChatDisplayModel()
            {
                Id = c.Id,
                Name = c.Name,
                // Todo понять почему не работает
                //LastMessageText = Context.Messages.Where(m => m.ChatId == c.Id).Last().Text,
                //LastMessageDate = c.Messages.Last().Date,
                VulnerabilityId = c.VulnerabilityId,
                VulnerabilityIdentifier = c.Vulnerability.Identifier
            }).ToList();

            foreach(var chat in chats)
            {
                var lastMessage = Context.Messages
                                         .Where(m => m.ChatId == chat.Id)
                                         .OrderBy(m => m.Date).Last();
                chat.LastMessageText = lastMessage.Text;
                chat.LastMessageDate = lastMessage.Date;

            }

            return chats.OrderByDescending(c => c.LastMessageDate);
        }

        public IEnumerable<Message> GetMessages(int chatId) => Context.Messages.Where(m => m.ChatId == chatId);
    }
}
