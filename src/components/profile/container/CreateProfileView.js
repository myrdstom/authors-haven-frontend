import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import {
    getCurrentProfile,
    createProfile,
} from '../../../redux/actions/profile/profileActions';
import CreateProfile from '../component/CreateProfile';

class CreateProfileView extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            bio: '',
            errors: {},
        };
    }
    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors }, () => {
                console.log(this.state.errors);
            });
        }

        if (nextProps.profile.profile && nextProps.profile.loading === false) {
            const { firstName, lastName, bio } = nextProps.profile.profile;
            this.setState({
                firstName,
                lastName,
                bio,
            });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const profileData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bio: this.state.bio,
        };
        const { createProfile, history } = this.props;

        createProfile(profileData, history);
    };

    render() {
        const { firstName, lastName, bio, errors } = this.state;
        const { user } = this.props.auth;
        const { profile, loading } = this.props;
        return (
            <div>
                {profile.profile === null || loading === true ? (
                    <Loader />
                ) : (
                    <CreateProfile
                        firstName={firstName}
                        lastName={lastName}
                        bio={bio}
                        errors={errors}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        user={user}
                    />
                )}
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    getCurrentProfile: dispatch(getCurrentProfile()),
    createProfile: (profileData, history) =>
        dispatch(createProfile(profileData, history)),
});

CreateProfileView.propTypes = {
    getCurrentProfile: PropTypes.func,
    createProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    profile: state.profile,
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(CreateProfileView));
