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
            <div class="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                        <nav class="nav nav-justified">
                            <button class="nav-item nav-link btn btn-link active"
                                onClick={this.handleLoginClick}>
                                    <h3 class="font-weight-bold">Вход</h3>
                            </button>
                            <button class="nav-item nav-link btn btn-link" 

                                onClick={this.handleRegisterClick}>
                                    <h3 class="font-weight-bold">Регистрация</h3>
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