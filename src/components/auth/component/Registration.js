import React from 'react';
import { Link } from 'react-router-dom';
import registration from '../../../images/auth/registration.png';


export default function Registration(props) {
    return (
        <div className="parent-auth-container container-fluid">
            <div className="row">
                <div className="col-7">
                    <div className="img-container">
                        <img className="auth-img" src={registration} alt="" />
                    </div>
                </div>
                <div className="col-5 auth-aside">
                    <div className="reg-container">
                        <h1>Get Started, its easy</h1>
                        <form noValidate onSubmit={props.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Username"
                                    name="username"
                                    value={props.username}
                                    onChange={props.onChange}
                                    required
                                />
                                {props.errors.username && (
                                    <div className="error-message">
                                        {props.errors.username}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email Address"
                                    name="email"
                                    value={props.email}
                                    onChange={props.onChange}
                                />
                                {props.errors.email && (
                                    <div className="error-message">
                                        {props.errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={props.password}
                                    onChange={props.onChange}
                                />
                                {props.errors.password && (
                                    <div className="error-message">
                                        {props.errors.password}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">
                                    confirmPassword
                                </label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={props.confirmPassword}
                                    onChange={props.onChange}
                                />
                                {props.errors.confirmPassword && (
                                    <div className="error-message">
                                        {props.errors.confirmPassword}
                                    </div>
                                )}
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                        <br />
                        <div className="login-link">
                            Already a member?{' '}
                            <Link to="/login" className="sign-in">
                                &nbsp;Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
