import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteArticle, getArticle } from '../../../../redux/actions/articles/articlesAction';
import NotFoundPage from '../../../NotFoundPage';
import Article from '../../component/Article/Article';
import Loader from '../../../Loader';

class GetArticleView extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.match.params.articleSlug);
    }

    onDeleteClick =() =>{
        const articleSlug = this.props.match.params.articleSlug;
        const {deleteArticle} = this.props
        deleteArticle(articleSlug);
    }

    render() {
        const { article, loading, auth } = this.props;

        if(loading){
            return (
                <div>
                    <Loader/>
                </div>
            )
        }
        return (
            <div>
                {article === null ? (
                    <NotFoundPage />
                ) : (
                    <Article
                        article = {article}
                        onDeleteClick = {this.onDeleteClick}
                        auth = {auth}
                    />
                )}
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    getArticle: articleSlug => dispatch(getArticle(articleSlug)),
    deleteArticle: articleSlug => dispatch(deleteArticle(articleSlug)),
});
GetArticleView.propTypes = {
    getArticle: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    deleteArticle: PropTypes.func
};
export const mapStateToProps = state => ({
    article: state.articles.article,
    auth: state.auth,
    loading: state.articles.loading,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetArticleView));
