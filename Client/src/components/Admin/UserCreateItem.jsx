import React from 'react';

class UserCreateItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            role: 1,
            password: '',
            passwordConfirm: '',
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCreate = (e) => {
        e.preventDefault();

        const { userName, role, password, passwordConfirm} = this.state;
        if (userName && role && password && passwordConfirm) {
            this.props.createUser({
                userName,
                password,
                passwordConfirm,
                role
            })
        }
    }

    render(){
        const { userName,  role, password, passwordConfirm } = this.state;

        return(
            <tr>
                <th scope="row">
                    <input type="text" className="form-control form-control-sm" 
                            placeholder="Имя пользователя"
                            name="userName" 
                            value={userName} 
                            onChange={this.handleChange} />
                </th>
                <td>
                    <select type="text" className="form-control form-control-sm" 
                            placeholder="Роль"
                            name="role" 
                            value={role} 
                            onChange={this.handleChange}>
                                <option value="0">Администратор</option>
                                <option value="1">Пользователь</option>
                    </select>
                </td>
                <td>
                    <input type="password" className="form-control form-control-sm" 
                            placeholder="Пароль"
                            name="password" 
                            value={password} 
                            onChange={this.handleChange} />
                </td>
                <td>
                    <input type="password" className=" form-control form-control-sm" 
                            placeholder="Подтверждение пароля"
                            name="passwordConfirm" 
                            value={passwordConfirm} 
                            onChange={this.handleChange} />
                </td>
                <td className="text-right">
                    <button className="btn btn-sm fa fa-floppy-o" 
                        aria-hidden="true"
                        onClick={this.handleCreate}>
                    </button>
                    <button className="btn btn-sm fa fa-times" 
                        aria-hidden="true"
                        onClick={this.props.remove}>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserCreateItem;