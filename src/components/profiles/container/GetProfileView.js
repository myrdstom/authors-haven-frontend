import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfile} from '../../../redux/actions/profileActions';

class GetProfileView extends Component {
    componentDidMount() {
        this.props.getProfile()
    }

    render() {
        return (
            <div>
                <h1>loaded the profile</h1>
            </div>
        );
    }
}

GetProfileView.propTypes = {
    getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getProfile }
)(GetProfileView);
