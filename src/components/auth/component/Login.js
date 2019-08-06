import React from 'react';
import login from '../../../images/auth/login.png';

export default function Login(props) {
    console.log(props.errors.email, 'the errors');
    return (
        <div>
            <div>
                <div className="parent-auth-container container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <div className="img-container">
                                <img className="auth-img" src={login} alt="" />
                            </div>
                        </div>
                        <div className="col-5 auth-aside">
                            <div className="auth-container">
                                <h1>Welcome back</h1>
                                <form noValidate onSubmit={props.onSubmit}>
                                    <div className="form-group registration-form">
                                        <label htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-sm"
                                            name="email"
                                            placeholder="Enter email"
                                            value={props.email}
                                            onChange={props.onChange}
                                            required
                                        />
                                        {props.errors.email && (
                                            <div className="error-message">
                                                {props.errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control form-control-sm"
                                            name="password"
                                            placeholder="Password"
                                            value={props.password}
                                            onChange={props.onChange}
                                            required
                                        />
                                        {props.errors.password && (
                                            <div className="error-message">
                                                {props.errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
