import React from 'react';
import ChatCreateModel from './ChatCreateModel';
import { clearMessages } from '../../store/chat/chatActions';
import { connect } from 'react-redux';

class NewChat extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            creare: false,
        }

        this.props.clearMessages();
    }

    handleCancelClick = () => {
        this.setState({ create: false });
    }

    handleCreateClick = () => {
        this.setState({ create: true });
    }

    render(){
        const { create } = this.state;

        return(
            <div style={{paddingTop: "20%"}}>
            {
                create ? (
                    <ChatCreateModel onCancel={this.handleCancelClick}/>
                ) : (
                    <div className="text-center">
                        <div className="mb-2">
                            <i className="fa fa-commenting-o fa-5x" aria-hidden="true"/>
                        </div>
                        <div>Пожалуйста, выберите диалог или</div>
                        <div>
                            <button className="btn btn-link" onClick={this.handleCreateClick}>
                                создайте новый
                            </button>
                        </div>
                    </div>
                )
            }
            </div>
         );
     }
 }

 const mapDispatchToProps = dispatch => {
    return {
        clearMessages: () => {
            dispatch(clearMessages());
        }
    }
}
 
 export default connect(null, mapDispatchToProps)(NewChat);