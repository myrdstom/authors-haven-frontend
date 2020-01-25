import axios from 'axios';
import { getArticle } from '../articles/articlesAction';

import { DELETE_COMMENT, GET_ERRORS } from '../types';
import { baseUrl } from '../../../config/config';

export const createComment = (commentData, articleSlug) => dispatch => {
    axios
        .post(`${baseUrl}/api/articles/comment/${articleSlug}`, commentData)
        .then(res => dispatch(getArticle(articleSlug)))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const deleteComment = (articleSlug, commentId) => dispatch => {
    axios
        .delete(`${baseUrl}/api/articles/comment/${articleSlug}/${commentId}`)
        .then(res =>
            dispatch({
                type: DELETE_COMMENT,
                payload: res.data,
            })
        )
        .then(res => dispatch(getArticle(articleSlug)))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};
