import React from 'react';

export default function Registration(props) {
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">
                            Create your Listicle account
                        </p>
                        <form onSubmit={props.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Username"
                                    name="username"
                                    value={props.username}
                                    onChange={props.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Email Address"
                                    name="email"
                                    value={props.email}
                                    onChange={props.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Password"
                                    name="password"
                                    value={props.password}
                                    onChange={props.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={props.confirmPassword}
                                    onChange={props.onChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-info btn-block mt-4"

                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
