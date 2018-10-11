import React from 'react'
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { loadUsers, deleteUser } from '../../store/admin/adminActions';

class Users extends React.Component{
    componentDidMount(){
        this.props.loadUsers();
    }

    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-between pb-2 mb-1">
                    <h4>Список пользователей</h4>
                    <button className="btn btn-outline-dark">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
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
            dispatch(deleteUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);