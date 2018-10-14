using System;
namespace Model.Chat
{
    public class ChatDisplayModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string LastMessageText { get; set; }
        public DateTime? LastMessageDate { get; set; }
        public int VulnerabilityId { get; set; }
        public string VulnerabilityIdentifier { get; set; }
    }
}
