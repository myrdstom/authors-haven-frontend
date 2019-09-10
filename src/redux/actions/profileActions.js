import axios from 'axios';

import { CLEAR_CURRENT_PROFILE, GET_PROFILE } from './types';
import { setLoading, loadingSuccess } from './loaderAction';

export const getProfile = () => dispatch => {
    dispatch(setLoading());
    axios
        .get('/api/profile')
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
    dispatch(loadingSuccess());
};

export const clearProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE,
    };
};
