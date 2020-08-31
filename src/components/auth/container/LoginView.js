import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from '../component/Login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth/auth';
import Footer from '../../Footer';

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
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors });
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
        const {email, password} = this.state;
        const userData = {
            email,
            password,
        };
        const { loginUser } = this.props;
        loginUser(userData);
    };

    render() {
        const { ...otherSectionState } = this.state;

        const { user } = this.props.auth;
        return (
            <div>
                <Login
                    {...otherSectionState}
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
    loginUser: userData => dispatch(loginUser(userData)),
});
LoginView.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

/* Map redux store state to component props*/

export const mapStateToProps = ({auth, errors}) => ({
    auth,
    errors,
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginView));
