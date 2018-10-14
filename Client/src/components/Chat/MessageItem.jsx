import React from 'react';
import Moment from 'react-moment'

class MessageItem extends React.Component{
    render(){
        return( 
            <div className="mb-3 ">
            {
                this.props.userName 
                ? 
                (   <div>
                        <span className="font-weight-bold">{this.props.userName}</span>
                        <small className="ml-2">
                            <Moment format="DD.MM.YY HH:mm">
                                {this.props.date}
                            </Moment>
                        </small>
                        <div>{this.props.text}</div>
                    </div>
                )
                :
                (
                    <div className="text-center">
                        <small>{this.props.text}</small>
                    </div>
                )
            }
                
            </div>
        );
    }
}

export default MessageItem;