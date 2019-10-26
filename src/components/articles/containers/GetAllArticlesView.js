import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../Loader';
import GetArticlesWrapper from '../component/getArticlesWrapper';
import { getAllArticles } from '../../../redux/actions/articles/articlesAction';

class GetAllArticlesView extends Component {
    render() {
        return (
            <div>
                <GetArticlesWrapper />
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    getAllArticles: dispatch(getAllArticles()),
});

export const mapStateToProps = state => ({
    articles: state.articles.articles,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetAllArticlesView));