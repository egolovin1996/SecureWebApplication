import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

class ChatItem extends React.Component{
   render(){
        return(
            <Link to={'/chat/'+ this.props.id} 
            className="list-group-item list-group-item-action flex-column align-items-start active-chat">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.name}</h5>
                    <small>
                        <Moment format="DD.MM.YY HH:mm">
                            {this.props.lastMessageDate}
                        </Moment>
                        <button className="btn btn-sm fa fa-times ml-2" 
                        onClick={(e) => this.props.deleteChat(e, this.props.id)}/>
                    </small>
                </div>
                <p className="mb-1">{this.props.lastMessageText}</p>
                <small>{this.props.vulnerabilityIdentifier}</small>
            </Link>
        );
    }
}

export default ChatItem;