import React from 'react';
import woman from '../../../assets/images/auth/women.jpg';
import styled from 'styled-components';

const SectionStyle = styled.div`
    background-image: url(${woman});
    background-size: cover;
    height: 94.5vh;
`;
export default function Login({onSubmit, email, password, errors, onChange}) {
    return (
        <div>
            <div className="auth__grid">
                <div className="authentication__aside">
                    <div className="authentication__container">
                        <h1>Welcome back</h1>
                        <div className="auth__action">Sign In</div>
                        <br />
                        <form id="loginForm" noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={onChange}
                                    id="email"
                                    required
                                />
                                {errors.email && (
                                    <div className="error-message">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChange}
                                    id="password"
                                    required
                                />
                                {!errors.email
                                    ? errors.password && (
                                          <div className="error-message">
                                              {errors.password}
                                          </div>
                                      )
                                    : ''}
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
                <div className="image__container">
                    <SectionStyle />
                </div>
            </div>
        </div>
    );
}
