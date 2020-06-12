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
import Footer from '../../Footer';

class CreateProfileView extends Component {
    constructor() {
        super();
        this.state = {
            avatar: '',
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
            const {
                firstName,
                lastName,
                bio,
                avatar,
            } = nextProps.profile.profile;
            this.setState({
                avatar,
                firstName,
                lastName,
                bio,
            });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    mouseClick = () => {
        const { history } = this.props;
        window.cloudinary.openUploadWidget(
            {
                cloudName: 'dr8lvoqjj',
                api_key: '456553935284737',
                uploadPreset: 'gt2kahpt',
                cropping: true,
                folder: 'widgetdocs',
                sources: [
                    'local',
                    'url',
                    'camera',
                    'facebook',
                    'dropbox',
                    'search',
                    'instagram',
                ],
            },
            (error, result) => {
                if (result.event === 'success') {
                    let newImage = result.info.secure_url;
                    window.localStorage.setItem('newImage', newImage);
                    window.localStorage.setItem('image', newImage);
                    history.push('/create-profile');
                }
            }
        );
        console.log('clicked the picture');
    };

    handleSubmit = e => {
        e.preventDefault();
        const { avatar, firstName, lastName, bio } = this.state;

        const profileData = {
            avatar: window.localStorage.getItem('newImage') || avatar,
            firstName,
            lastName,
            bio,
        };
        const { createProfile, history } = this.props;

        createProfile(profileData, history);
    };

    render() {
        const { ...otherSectionState } = this.state;
        const { user } = this.props.auth;
        const { profile } = this.props;

        return (
            <div>
                {profile.profile === null || profile.loading === true ? (
                    <Loader />
                ) : (
                    <div>
                        <CreateProfile
                            {...otherSectionState}
                            user={user}
                            onMouseClick={this.mouseClick}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        />
                        <Footer />
                    </div>
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
    getCurrentProfile: PropTypes.func, //Look ito the getCurrentProfile dispatch
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
