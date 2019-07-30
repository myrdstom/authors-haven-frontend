import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Registration from '../component/Registration';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/auth/auth';

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
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const {
            username,
            email,
            password,
            confirmPassword,
            errors,
        } = this.state;

        const { user } = this.props.auth;

        return (
            <Registration
                username={username}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                errors={errors}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                user={user}
            />
        );
    }
}

RegistrationView.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(RegistrationView));
