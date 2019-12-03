import axios from 'axios';

import {
    GET_ARTICLES,
    GET_ARTICLE,
    ARTICLE_LOADING,
    GET_ERRORS,
} from '../types';

export const getAllArticles = () => dispatch => {
    dispatch(setArticleLoading);
    axios.get('/api/articles').then(res =>
        dispatch({
            type: GET_ARTICLES,
            payload: res.data,
        })
    );
};

export const getArticle = articleSlug => dispatch => {
    dispatch(setArticleLoading);

    axios
        .get(`/api/articles/${articleSlug}`)
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
        .post(`/api/articles/`, articleData)
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
        .put(`/api/articles/${articleSlug}`, articleData)
        .then(res => history.push(`/api/articles/{}`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// export const deleteArticle = (articleSlug) => dispatch => {
//     dispatch(setArticleLoading());
//     axios.delete(`./api/articles/${articleSlug}`).then(res => {
//         history.push('/');
//     });
// };

/**
 * @desc Profile Loading
 */

export const setArticleLoading = () => {
    return {
        type: ARTICLE_LOADING,
    };
};
