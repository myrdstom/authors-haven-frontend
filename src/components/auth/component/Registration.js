import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import books from '../../../assets/images/auth/Books.jpg';

const SectionStyle = styled.div`
    background-image: url(${books});
    background-size: cover;
    height: 94.5vh;
`;

export default function Registration({onSubmit, onChange, email, username, password, errors, confirmPassword}) {
    return (
        <div className="parent-auth-container container-fluid">
            <div className="auth__grid">
                <div className="registration__aside">
                    <div className="registration__container">
                        <h1>Get Started, its easy</h1>
                        <div className="auth__action">Sign Up</div>
                        <br />
                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={onChange}
                                    required
                                    id="username"
                                />
                                {errors && errors.data && errors.data.username && (

                                    <div className="error-message">
                                        {errors.data.username}
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
                                    value={email}
                                    onChange={onChange}
                                    id="email"
                                />
                                {errors && errors.data && !errors.data.username
                                    ? errors.data.email && (
                                          <div className="error-message">
                                              {errors.data.email}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    id="password"
                                />
                                {errors && errors.data && !errors.data.username && !errors.data.email
                                    ? errors.data.password && (
                                          <div className="error-message">
                                              {errors.data.password}
                                          </div>
                                      )
                                    : ''}
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
                                    value={confirmPassword}
                                    onChange={onChange}
                                    id="confirmPassword"
                                />
                                {errors && errors.data && !errors.data.username &&
                                !errors.data.email &&
                                !errors.data.password
                                    ? errors.data.confirmPassword && (
                                          <div className="error-message">
                                              {errors.data.confirmPassword}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                        <br />
                        <div className="login-link">
                            Already a member?{' '}
                            <Link to="/login" className="sign__in">
                                &nbsp;Sign In
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="image__container">
                    <SectionStyle />
                </div>
            </div>
        </div>
    );
}
