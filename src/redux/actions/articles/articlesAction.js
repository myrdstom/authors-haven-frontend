import axios from 'axios';

import { GET_ARTICLES, GET_ARTICLE, ARTICLE_LOADING } from '../types';
import { setProfileLoading } from '../profile/profileActions';

export const getAllArticles = () => dispatch => {
    dispatch(setArticleLoading);
    axios.get('/api/articles').then(res =>
        dispatch({
            type: GET_ARTICLES,
            payload: res.data,
        })
    );
};

export const getArticle = () => dispatch => {
    dispatch(setArticleLoading);
    axios.get(`/api/articles/{}`).then(res =>
        dispatch({
            type: GET_ARTICLE,
            payload: res.data,
        })
    );
};

// export const createArticle = () => dispatch => {
//     dispatch(setArticleLoading());
//     axios
//         .post(`/api/articles/{}`)
//         .then(res => history.push(`/api/articles/{}`));
// };
//
// export const editArticle = () => dispatch => {
//     dispatch(setArticleLoading());
//     axios.put(`/api/articles/{}`).then(res => history.push(`/api/articles/{}`));
// };

// export const deleteArticle = () => dispatch => {
//     dispatch(setArticleLoading());
//     axios.delete(`./api/articles/{}`).then(res => {
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