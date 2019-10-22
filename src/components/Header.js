import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/auth/auth';
import { clearCurrentProfile } from '../redux/actions/profile/profileActions';

export class Header extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    };
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
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
                        {isAuthenticated && (
                            <div>
                                <img src="" alt="" className="rounded-circle" />
                                <button
                                    className="btn btn-basic my-2 my-sm-0"
                                    type="submit"
                                >
                                    <Link to="/profile" className="auth-login">
                                        {' '}
                                        <span className="small-font">
                                            PROFILE
                                        </span>
                                    </Link>
                                </button>
                                <button
                                    className="btn btn-outline-primary my-2 my-sm-0"
                                    type="submit"
                                >
                                    <Link
                                        to="/"
                                        className="auth-register"
                                        onClick={this.onLogoutClick}
                                    >
                                        <span className="small-font">
                                            LOGOUT
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        )}
                        {!isAuthenticated && (
                            <div>
                                <button
                                    className="btn btn-basic my-2 my-sm-0"
                                    type="submit"
                                >
                                    <Link
                                        to="/login"
                                        className="authentication__login--link"
                                    >
                                        {' '}
                                        <span className="small-font">
                                            LOGIN
                                        </span>
                                    </Link>
                                </button>
                                <button
                                    className="btn btn-outline-primary my-2 my-sm-0"
                                    type="submit"
                                >
                                    <Link
                                        to="/register"
                                        className="authentication__register--link"
                                    >
                                        <span className="small-font">
                                            GET STARTED
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    clearCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser, clearCurrentProfile }
)(Header);
