import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Registration from '../component/Registration';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/auth/auth';

import Footer from '../../Footer';

export class RegistrationView extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
        };
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { errors } = this.props;
        if (errors !== prevProps.errors) {
            this.setState({ errors });
            setTimeout(() => {
                this.setState({ errors: 'false' });
            }, 5000);
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = this.state;
        const newUser = {
            username,
            email,
            password,
            confirmPassword,
        };
        const { history } = this.props;

        this.props.registerUser(newUser, history);
    };
    render() {
        const {
            ...otherSectionState
        } = this.state;

        const { user } = this.props.auth;

        return (
            <div>
                <Registration
                    {...otherSectionState }
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    user={user}
                />
                <Footer />
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    registerUser: (newUser, history) =>
        dispatch(registerUser(newUser, history)),
});

RegistrationView.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RegistrationView));
