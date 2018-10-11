import React from 'react';
import Login from './Login'
import Register from './Register'


class Auth extends React.Component {
    constructor(){
        super();
        this.state = {isLoginPage: true}

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoginPage: true});
      }
    
      handleRegisterClick() {
        this.setState({isLoginPage: false});
      }

    render() {
        const isLogingPage = this.state.isLoginPage;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                        <nav className="nav nav-justified">
                            <button className="nav-item nav-link btn btn-link active"
                                onClick={this.handleLoginClick}>
                                { isLogingPage 
                                    ? (<h3 className="font-weight-bold">Вход</h3>) 
                                    : (<h4 className="font-weight-bold">Вход</h4>)
                                }    
                            </button>
                            <button className="nav-item nav-link btn btn-link" 
                                onClick={this.handleRegisterClick}>
                                    { isLogingPage 
                                    ? (<h4 className="font-weight-bold">Регистрация</h4>) 
                                    : (<h3 className="font-weight-bold">Регистрация</h3>)
                                } 
                            </button>
                        </nav>
                        { isLogingPage ? (<Login/>): (<Register/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;