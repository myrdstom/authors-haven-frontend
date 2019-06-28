import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    Listicle
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>


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
                            <span className="small-font">LOGIN</span>
                        </button>
                        <button
                            className="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                        >
                            <span className="small-font">GET STARTED</span>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
