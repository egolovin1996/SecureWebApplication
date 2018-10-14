import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

class ChatItem extends React.Component{
   render(){
        return(
            <Link to={'/chat/'+ this.props.id} 
            className="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{this.props.name}</h5>
                    <small>
                        <Moment format="DD.MM.YY HH:mm">
                            {this.props.lastMessageDate}
                        </Moment>
                    </small>
                </div>
                <p class="mb-1">{this.props.lastMessageText}</p>
                <small>{this.props.vulnerabilityIdentifier}</small>
            </Link>
        );
    }
}

export default ChatItem;