import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ChatItem from './ChatItem';
import Messages from './Messages'
import NewChat from './NewChat'
import { loadChats } from '../../store/chat/chatActions';

class Chats extends React.Component{
    componentDidMount(){
        this.props.loadChats();
    }

    render(){
        return(
            <div className="container" style={{height: '600px'}}>
                <div className="row h-100">
                    <div className="col-sm-4 h-100">
                        <div class="card h-100" style={{overflowY: 'scroll'}}>
                            <div class="list-group list-group-flush">
                            {
                                this.props.chats && this.props.chats.map((item) =>
                                    <ChatItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        vulnerabilityIdentifier={item.vulnerabilityIdentifier}
                                        lastMessageText={item.lastMessageText}
                                        lastMessageDate={item.lastMessageDate}
                                    />
                                )
                            }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="card h-100">
                            <Route exact path='/chat' component={NewChat}/>
                            <Route path='/chat/:chatId' component={Messages}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.chat.chats
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadChats: () => {
            dispatch(loadChats());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);