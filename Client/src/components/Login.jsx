import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../store/auth/authActions'

class Login extends React.Component {
    constructor(props){
        super(props)

        // При открытии делаем logout
        this.props.dispatch(logout());

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password));
        }
    }

    render() {
        const { username, password } = this.state;

        return(
            <div className="col-md-6 col-md-offset-3">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Имя пользователя</label>
                        <input type="text" className="form-control" 
                            name="username" 
                            value={username} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" 
                            name="password" 
                            value={password} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Войти</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (userName, password) => {
//             dispatch(login(userName, password));
//         },
//         logout: () => {
//             dispatch(logout())
//         }
//     }
// }

export default connect()(Login);

//export default connect(mapDispatchToProps)(Login);