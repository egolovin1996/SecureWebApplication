import React from 'react';
import MessageItem from "./MessageItem"
import { connect } from 'react-redux';
import { loadMessages, addMessage } from '../../store/chat/chatActions';

class ChatItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            chatId: this.props.match.params.chatId,
        };
    }

    componentDidMount(){
        const { chatId } = this.state;
        console.log(chatId);
        this.props.loadMessages(chatId);
    }

    componentWillReceiveProps(nextProps) {
        const newChatId = nextProps.match.params.chatId;
        const { chatId } = this.state;
        if(newChatId !== chatId){
            this.setState({chatId: newChatId});
            this.props.loadMessages(newChatId);
        }  
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
        const { text } = this.state;
        if(!text) return;
        const message = {
            text: text,
            chatId: this.props.match.params.chatId
        };
        this.props.addMessage(message);
        this.setState({ text: '' });
    }

    render(){
        const { text } = this.state;

        return(
            <ul class="list-group list-group-flush h-100">
                <li class="list-group-item" style={{height: '90%', overflowY: 'scroll'}}>
                {
                    this.props.messages && this.props.messages.map(item =>
                        <MessageItem 
                            key={item.date}  
                            text={item.text} 
                            date={item.date}
                            userName={item.userName}/>)
                }
                </li>
                <li class="list-group-item">
                    <div class="input-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Введите текст"
                            name="text" 
                            value={text} 
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}/>
                        <div class="input-group-append">
                            <button 
                                class="btn btn-outline-success fa fa-paper-plane-o" 
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
        loadMessages: (id) => {
            dispatch(loadMessages(id));
        },
        addMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);