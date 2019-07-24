import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    Listicle
                </Link>
                    <div className="navbar--center">
                        <form className="form-inline">
                            <input
                                className="form-control mr-sm-2 small-font"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                    </div>
                    <div className="navbar--right">
                        <button
                            className="btn btn-basic my-2 my-sm-0"
                            type="submit"
                        >
                            <Link to="/login" className="auth-login"> <span className="small-font">PROFILES</span></Link>
                        </button>

                        <button
                            className="btn btn-basic my-2 my-sm-0"
                            type="submit"
                        >
                            <Link to="/login" className="auth-login"> <span className="small-font">LOGIN</span></Link>
                        </button>
                        <button
                            className="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                        >
                            <Link to="/register" className="auth-register"><span className="small-font">GET STARTED</span></Link>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
