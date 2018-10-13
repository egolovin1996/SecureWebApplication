using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model.Chat;
using Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SecureWeb.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        readonly IChatRepository _repository;

        public ChatController(IChatRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        [Route("createChat")]
        public IActionResult CreateChat([FromBody] Chat chat)
        {
            _repository.AddChat(chat);

            return Ok();
        }

        [Authorize(Roles = "admin")]
        [HttpGet]
        [Route("deleteChat/{id}")]
        public IActionResult DeleteChat(int id)
        {
            _repository.DeleteChat(id);

            return Ok();
        }

        [HttpPost]
        [Route("addMessage")]
        public IActionResult AddMessage([FromBody] Message message)
        {
            message.UserName = User.Identity.Name;
            _repository.AddMessage(message);

            return Ok();
        }

        [Authorize(Roles = "admin")]
        [HttpGet]
        [Route("deleteMessage/{id}")]
        public IActionResult DeleteMessage(int id)
        {
            _repository.DeleteMessage(id);

            return Ok();
        }

        [HttpGet]
        [Route("getChats")]
        public IActionResult GetChats()
        {
            var chats = _repository.GetChats().ToList();

            return Ok(chats);
        }

        [HttpGet]
        [Route("getMessages/{chatId}")]
        public IActionResult GetMessages(int chatId)
        {
            var messages = _repository.GetMessages(chatId).ToList();

            return Ok(messages);
        }
    }
}
