import React from 'react';
import * as signalR from "@aspnet/signalr";
import MessageItem from "./MessageItem"
import { connect } from 'react-redux';
import { loadChats, loadMessages, addMessage } from '../../store/chat/chatActions';

class ChatItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            hubConnection: null,
            chatId: this.props.match.params.chatId,
        };
    }

    componentDidMount(){
        const { chatId } = this.state;
        this.props.loadMessages(chatId);
        this.scrollToBottom();

        const hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:5001/chat')
            .configureLogging(signalR.LogLevel.Information)
            .build();

        this.setState({ hubConnection }, () => {
            this.state.hubConnection
                .start()
                .catch(err => console.log(err));
            });

        hubConnection.on("NewMessage", (newChatId) => {
            this.props.loadChats();
            if( parseInt(chatId, 10) === parseInt(newChatId, 10)){
                
                this.props.loadMessages(chatId);
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        const newChatId = nextProps.match.params.chatId;
        const { chatId } = this.state;
        if(newChatId !== chatId){
            this.setState({chatId: newChatId});
            this.props.loadMessages(newChatId);
        }  
    }
      
    componentDidUpdate() {
        this.scrollToBottom();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleKeyDown = (e) => {
        // Enter
        if (e.keyCode === 13) {
            this.addMessage();
        }
    }

    addMessage = () => {
        const { text, hubConnection, chatId } = this.state;
        if(!text) return;

        const message = {
            text: text,
            chatId: chatId,
        };
        this.props.addMessage(message);
        hubConnection.send("SendToChat", chatId);

        this.setState({ text: '' });
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "instant" });
    }

    render(){
        const { text } = this.state;

        return(
            <ul className="list-group list-group-flush h-100">
                <li className="list-group-item" 
                    style={{height: '90%', overflowY: 'auto'}}>
                    {
                        this.props.messages && this.props.messages.map(item =>
                            <MessageItem 
                                key={item.date}  
                                text={item.text} 
                                date={item.date}
                                userName={item.userName}/>)
                    }
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Введите текст"
                            name="text" 
                            value={text} 
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}/>
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-success fa fa-paper-plane-o" 
                                type="button"
                                onClick={this.addMessage}
                                />
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadChats: () => {
            dispatch(loadChats());
        },
        loadMessages: (id) => {
            dispatch(loadMessages(id));
        },
        addMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);