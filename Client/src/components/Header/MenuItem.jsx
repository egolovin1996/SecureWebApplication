import React from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends React.Component{
    render(){
        return(
            <li className="nav-item">
                <Link className="nav-link" to={this.props.route}>
                    {this.props.name}
                </Link>
            </li>
        );
    }
}

export default MenuItem;