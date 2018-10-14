import React from 'react';
import { connect } from 'react-redux';
import { createChat } from '../../store/chat/chatActions';

class ChatCreateModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            vulnerabilityId: ''
        }
    }

    handleCancelClick = () => {
        this.setState({ create: false });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCreateClick = () => {
        const { name, vulnerabilityId} = this.state;
        const chat = {
            name,
            vulnerabilityId
        }
        this.props.createChat(chat);
    }

    render(){
        const { name, vulnerabilityId } = this.state;

        return(
            <div className="col-md-4 offset-md-4">
                
                    <div className='form-group'>
                    <label htmlFor="name" className="font-weight-bold">
                        Название
                    </label>
                    <input type="text" className="form-control" 
                        placeholder="Название"
                        name="name" 
                        value={name} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                    <label htmlFor="vulnerabilityId" className="font-weight-bold">
                        Уязвимость
                    </label>
                    <input type="text" className="form-control" 
                        placeholder="Id уязвимости"
                        name="vulnerabilityId" 
                        value={vulnerabilityId} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-light ml-3 mr-2" onClick={this.props.onCancel}>
                            Отмена
                        </button>
                        <button className="btn btn-primary" onClick={this.handleCreateClick}>
                            Создать
                        </button>
                    </div>
                
            </div>
         );
     }
 }

const mapDispatchToProps = dispatch => {
    return {
        createChat: (chat) => {
            dispatch(createChat(chat));
        }
    }
}

export default connect(null, mapDispatchToProps)(ChatCreateModel);