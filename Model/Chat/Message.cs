using System;

namespace Model.Chat
{
    public class Message
    {
        public int Id { get; set; }

        public string Text { get; set; }
        public string UserName { get; set; }
        public DateTime Date { get; set; }

        public int ChatId { get; set; }
        public Chat Chat { get; set; }
    }
}
