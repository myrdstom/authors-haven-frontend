import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticle } from '../../../redux/actions/articles/articlesAction';
import Loader from '../../Loader';


class GetArticleView extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}



export const mapDispatchToProps = dispatch => ({
    getAllArticles: dispatch(getArticle()),
});
GetArticleView.propTypes = {};
export const mapStateToProps = state => ({
    articles: state.articles.article,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetArticleView));