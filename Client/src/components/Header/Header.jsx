import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMenu } from '../../store/menu/menuActions';
import MenuItem from './MenuItem';

class Header extends React.Component {
    componentWillMount() {
        if(this.props.loggedIn){
            this.props.loadMenu();
        }
    }

    render(){
        const isAuthenticated = this.props.loggedIn;
        console.log('render');

        console.log(this.props);
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
                <div className="navbar-brand">
                    <Link to="/" style={{ textDecoration: 'none', color: "#61dafb"}}>
                        <i className="fa fa-shield" aria-hidden="true"></i>
                        <span> <strong>Secure Web Application</strong></span>
                    </Link>
                </div>
                <ul className="navbar-nav mr-auto">
                {
                    this.props.menuItems && this.props.menuItems.map(
                        (item) => 
                            <MenuItem route={item.route} name={item.name}/>)
                }
                </ul>
                {
                    isAuthenticated ? (
                    <button className="btn btn-outline-secondary ">
                        <Link to="/login" style={{ textDecoration: 'none', color: "white"}}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span> <strong>Выход</strong></span>
                        </Link>
                    </button>) : ''
                }
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        menuItems: state.menu.menuItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadMenu: () => {
            dispatch(loadMenu());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);