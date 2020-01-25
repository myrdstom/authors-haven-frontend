import axios from 'axios';

import {
    GET_ARTICLES,
    GET_ARTICLE,
    ARTICLE_LOADING,
    GET_ERRORS,
    DELETE_ARTICLE
} from '../types';

import {baseUrl} from '../../../config/config';


export const getAllArticles = () => dispatch => {
    dispatch(setArticleLoading);
    axios.get(`${baseUrl}/api/articles`.then(res =>
        dispatch({
            type: GET_ARTICLES,
            payload: res.data,
        })
    );
};

export const getArticle = articleSlug => dispatch => {
    dispatch(setArticleLoading);

    axios
        .get(`${baseUrl}/api/articles/${articleSlug}`)
        .then(res =>
            dispatch({
                type: GET_ARTICLE,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ARTICLE,
                payload: null,
            })
        );
};

export const createArticle = (articleData, history) => dispatch => {
    dispatch(setArticleLoading());
    axios
        .post(`${baseUrl}/api/articles/`, articleData)
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const editArticle = (articleData, articleSlug, history) => dispatch => {
    dispatch(setArticleLoading());
    axios
        .put(`${baseUrl}/api/articles/${articleSlug}`, articleData)
        .then(res => history.push(`/api/articles/${articleSlug}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const deleteArticle = (articleSlug, history) => dispatch => {
    dispatch(setArticleLoading());
    axios
        .delete(`${baseUrl}/api/articles/${articleSlug}`)
        .then(res =>
        dispatch({
            type: DELETE_ARTICLE,
            payload: res.data
        }))
        .then(res => dispatch(getAllArticles()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

/**
 * @desc Profile Loading
 */

export const setArticleLoading = () => {
    return {
        type: ARTICLE_LOADING,
    };
};
