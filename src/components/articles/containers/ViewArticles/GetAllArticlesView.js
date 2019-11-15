import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../../Loader';
import GetArticlesWrapper from '../../component/getArticlesWrapper';
import GetArticle from './GetArticle';
import { getAllArticles } from '../../../../redux/actions/articles/articlesAction';

class GetAllArticlesView extends Component {
    componentDidMount() {


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
    }

    render() {
        const {articles, loading} = this.props.articles;
        return (
            <div>
                <GetArticlesWrapper />
                <GetArticle
                articles={articles}
                />
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    getAllArticles: dispatch(getAllArticles()),
});

GetAllArticlesView.propTypes = {
    articles: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
    articles: state.articles,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetAllArticlesView));
