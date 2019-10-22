import React from 'react';
// import { Link } from 'react-router-dom';

function CreateProfile(props) {
    const { bio, firstName, lastName, errors } = props;
    return (
        <div className="create__profile-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={props.onSubmit}>
                            <h1 className="update__profile text-center">
                                Update Your Profile
                            </h1>
                            <h2>
                                {' '}
                                <p className="lead text-center">
                                    Let's make your profile awesome!!
                                </p>
                            </h2>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="firstName"
                                    value={firstName}
                                    onChange={props.onChange}
                                    id="firstName"
                                    required
                                />
                                {props.errors.firstName && (
                                    <div className="error-message">
                                        {errors.firstName}
                                    </div>
                                )}
                                <br/>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control profile__input"
                                    name="lastName"
                                    value={lastName}
                                    onChange={props.onChange}
                                    id="lastName"
                                    required
                                />
                                {props.errors.lastName && (
                                    <div className="error-message">
                                        {errors.lastName}
                                    </div>
                                )}
                                <br/>
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    type="text"
                                    className="form-control profile__input"
                                    name="bio"
                                    value={bio}
                                    onChange={props.onChange}
                                    id="bio"
                                />
                                {props.errors.bio && (
                                    <div className="error-message">
                                        {errors.bio}
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
    );
}

export default CreateProfile;
