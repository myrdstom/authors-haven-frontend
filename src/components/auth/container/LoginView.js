import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../component/Login';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth/auth';

export class LoginView extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/');
        }
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData);
    };

    render() {
        const { email, password, errors } = this.state;


        const { user } = this.props.auth;
        return (
            <Login
                email={email}
                password={password}
                errors={errors}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                user={user}
            />
        );
    }
}

LoginView.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { loginUser }
)(LoginView);
