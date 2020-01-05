import axios from 'axios';
import { GET_ERRORS } from '../types';

export const likeArticle = (articleSlug, history) => dispatch => {
    axios
        .post(`/api/articles/like/${articleSlug}`)
        .then(res => history.push(`/${articleSlug}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const unlikeArticle = (articleSlug, history) => dispatch => {
    axios
        .post(`/api/articles/unlike/${articleSlug}`)
        .then(res => history.push(`/${articleSlug}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const dislikeArticle = (articleSlug, history) => dispatch => {
    axios
        .post(`/api/articles/dislike/${articleSlug}`)
        .then(res => history.push(`/${articleSlug}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const undislikeArticle = (articleSlug, history) => dispatch => {
    axios
        .post(`/api/articles/undislike/${articleSlug}`)
        .then(res => history.push(`/${articleSlug}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};
