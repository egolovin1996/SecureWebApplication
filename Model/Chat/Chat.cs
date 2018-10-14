using System.Collections.Generic;

namespace Model.Chat
{
    public class Chat
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public List<Message> Messages { get; set; }

        public int VulnerabilityId { get; set; }
        public Vulnerability.Vulnerability Vulnerability { get; set; }

        public Chat(){
            Messages = new List<Message>();
        }
    }
}
