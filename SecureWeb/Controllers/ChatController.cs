﻿using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Model.Chat;
using Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using SecureWeb.Hubs;

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

            return Ok(chat.Id);
        }

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
            var result = _repository.GetChats();

            return Ok(result);
        }

        [HttpGet]
        [Route("getMessages/{chatId}")]
        public IActionResult GetMessages(int chatId)
        {
            var result = _repository.GetMessages(chatId);

            return Ok(result);
        }
    }
}
