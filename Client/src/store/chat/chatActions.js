import { CHATS_LOADED, MESSAGES_LOADED } from '../actionTypes';
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
import { history } from '../../helpers/history'
    
export function loadChats() {
    return (dispatch) => {
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/chat/getChats', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(chatsLoaded(data)); 
            }) 
            .catch((err) => {
                throw err; 
            }) 
    } 

    function chatsLoaded(chats) {
        return { 
            type: CHATS_LOADED, 
            payload: {
                chats
            }
        }; 
    }
}

export function loadMessages(chatId) {
    return (dispatch) => {
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/chat/getMessages/' + chatId, requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(chatsLoaded(data)); 
            }) 
            .catch((err) => {
                throw err; 
            }) 
    } 

    function chatsLoaded(messages) {
        return { 
            type: MESSAGES_LOADED, 
            payload: {
                messages
            }
        }; 
    }
}

export function clearMessages() {
    return (dispatch) => {
        dispatch(messagesCleared()); 
    } 

    function messagesCleared() {
        return { 
            type: MESSAGES_LOADED, 
            payload: {
                messages: []
            }
        }; 
    }
}

export function addMessage(message) {
    return (dispatch) => {
        const requestOptions = {
            method: "POST",
            headers: getAuthHeader(),
            body: JSON.stringify(message)
        };
        fetch('/api/chat/addMessage', requestOptions)
            .then(handleResponse)
            .then(() => { 
                dispatch(loadMessages(message.chatId));
                dispatch(loadChats());
            }) 
            .catch((err) => {
                throw err; 
            }) 
    }
}

export function createChat(chat) {
    return (dispatch) => {
        const requestOptions = {
            method: "POST",
            headers: getAuthHeader(),
            body: JSON.stringify(chat)
        };
        fetch('/api/chat/createChat', requestOptions)
            .then(handleResponse)
            .then((id) => {
                console.log(id);
                history.push('/chat/'+id);
                dispatch(loadChats()); 
            }) 
            .catch((err) => {
                throw err; 
            }) 
    }
}