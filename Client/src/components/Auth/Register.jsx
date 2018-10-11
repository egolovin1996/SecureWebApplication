import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/auth/authActions'

class Register extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            password: '',
            passwordConfirm: ''
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

        const { userName, password, passwordConfirm } = this.state;
        const { dispatch } = this.props;
        if (userName && password && passwordConfirm) {
            dispatch(register({userName, password, passwordConfirm}));
        }
    }

    render() {
        const { userName, password, passwordConfirm } = this.state;

        return(
            <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="userName" className="font-weight-bold"> 
                            Имя пользователя
                        </label>
                        <input type="text" className="form-control" 
                            placeholder="Имя пользователя"
                            name="userName" 
                            value={userName} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password" className="font-weight-bold">
                            Пароль
                        </label>
                        <input type="password" className="form-control" 
                            placeholder="Пароль"
                            name="password" 
                            value={password} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="passwordConfirm" className="font-weight-bold">
                            Подтверждение пароля
                        </label>
                        <input type="password" className="form-control" 
                            placeholder="Пароль"
                            name="passwordConfirm" 
                            value={passwordConfirm} 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Зарегистрироваться</button>
                    </div>
                </form>
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

export default connect()(Register);

//export default connect(mapDispatchToProps)(Login);