import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
                <a className="navbar-brand">
                    <Link to="/" style={{ textDecoration: 'none', color: "#61dafb"}}>
                        <i className="fa fa-shield" aria-hidden="true"></i>
                        <span> <strong>Secure Web Application</strong></span>
                    </Link>
                </a>
                <form class="form-inline">
                    <button class="btn btn-outline-secondary ">
                        <Link to="/login" style={{ textDecoration: 'none', color: "white"}}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span> <strong>Выход</strong></span>
                        </Link>
                    </button>
                </form>
            </nav>
        )
    }
}

export default Header;