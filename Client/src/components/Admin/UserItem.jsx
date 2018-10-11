import React from 'react';

class UserItem extends React.Component{
    render(){
        return(
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.role}</td>
                <td className="text-right">
                    <button className="btn btn-sm fa fa-trash" 
                        aria-hidden="true"
                        onClick={this.props.deleteUser}>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;