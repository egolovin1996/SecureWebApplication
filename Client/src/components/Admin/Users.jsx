import React from 'react'
import UserItem from './UserItem';
import UserCreateItem from './UserCreateItem'
import { connect } from 'react-redux';
import { loadUsers, deleteUser, createUser } from '../../store/admin/adminActions';
import { Date } from 'core-js';

class Users extends React.Component{
    constructor() {
        super();
        this.state = {
            newUsers: []
        }
    }

    componentDidMount(){
        this.props.loadUsers();
        
    }

    createUser = (user) => {
        this.props.createUser(user);
    }

    addUserCreateItem = () => {
        const { newUsers } = this.state;
        const item = <UserCreateItem key={Date.now()} 
            remove={() => this.removeUserCreateItem(item)} 
            createUser={(user) => {
                this.props.createUser(user);
                this.removeUserCreateItem(item);
            }}/>;
        newUsers.push(item);
        this.setState({ newUsers });
    }

    removeUserCreateItem = (item) => {
        const { newUsers } = this.state;
        const result = newUsers.filter((user) => user !== item);
        this.setState({ newUsers: result });
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-between pb-2 mb-1">
                    <h4>Список пользователей</h4>
                    <button className="btn btn-outline-dark" onClick={this.addUserCreateItem}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
                {
                    this.state.newUsers.length > 0 && (
                        <table className="table">
                            <thead>
                                <th scope="col">Имя</th>
                                <th scope="col">Роль</th>
                                <th scope="col">Пароль</th>
                                <th scope="col">Пароль</th>
                                <th scope="col"></th>
                            </thead>
                            <tbody>
                                {
                                    this.state.newUsers.map((newUser) => {
                                        return newUser;
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
                <table className="table table-hover">
                    <thead>
                        <th scope="col">Id</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Роль</th>
                        <th scope="col"></th>
                    </thead>
                    <tbody>
                        {
                            this.props.users && this.props.users.map(
                                (item) => 
                                    <UserItem
                                        key={item.id}
                                        id={item.id} 
                                        name={item.name} 
                                        role={item.role}
                                        deleteUser={() => this.props.deleteUser(item.id)}/>)
                        }
                    </tbody>
                </table>
            </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.admin.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        deleteUser: (id) => {
            dispatch(deleteUser(id));
        },
        createUser: (user) => {
            dispatch(createUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);