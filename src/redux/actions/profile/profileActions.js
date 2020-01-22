import axios from 'axios';

import {
    GET_PROFILE,
    PROFILE_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_PROFILE,
} from '../types';

import {baseUrl} from '../../../config/config';

/**
 * @desc Get current profile
 */

export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`${baseUrl}/api/profiles`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {},
            })
        );
};

/**
 * @desc Profile Loading
 */

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING,
    };
};

/**
 * @desc Clear Profile
 */

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE,
    };
};

/**
 * @desc Create or Edit profile
 */

export const createProfile = (profileData, history) => dispatch => {
    dispatch(setProfileLoading());
    axios
        .post(`${baseUrl}api/profiles`, profileData)
        .then(res => {
            history.push('/profile');
        })
        .then(res => localStorage.clear())
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};
