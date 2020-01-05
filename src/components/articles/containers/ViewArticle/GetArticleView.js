import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticle } from '../../../../redux/actions/articles/articlesAction';
import {
    likeArticle,
    dislikeArticle,
} from '../../../../redux/actions/likes/likeActions';
import NotFoundPage from '../../../NotFoundPage';
import Article from '../../component/Article/Article';
import Loader from '../../../Loader';
import { getCurrentProfile } from '../../../../redux/actions/profile/profileActions';

class GetArticleView extends Component {
    constructor() {
        super();
        this.state = {
            articleSlug: '',
            likes: [],
            dislikes: [],
            likedStatus: '',
            dislikedStatus: '',
            loading:'',
        };
    }
    componentDidMount() {
        const articleSlug = this.props.getArticle(
            this.props.match.params.articleSlug
        );
        this.setState({ articleSlug });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(this.status, 3000);
    }

    status = () => {
        const { article, auth } = this.props;
        const userId = auth.user.id;
        const likesArray = article.likes;
        const dislikesArray = article.dislikes;
        if (likesArray.length > 0) {
            likesArray.forEach(element => {
                if (element.user === userId) {
                    this.setState({ likedStatus: true });
                    this.setState({ dislikedStatus: false });
                } else {
                    this.setState({ likedStatus: false });
                    this.setState({ dislikedStatus: true });
                }
            });
        }

        if (dislikesArray.length > 0) {
            dislikesArray.forEach(element => {
                if (element.user === userId) {
                    this.setState({ dislikedStatus: true });
                    this.setState({ likedStatus: false });
                } else {
                    this.setState({ dislikedStatus: false });
                    this.setState({ likedStatus: true });
                }
            });
        }
    };
    like = () => {
        const articleSlug = this.props.match.params.articleSlug;
        const { likeArticle, history } = this.props;
        this.status();
        likeArticle(articleSlug, history);
    };

    dislike = () => {
        const articleSlug = this.props.match.params.articleSlug;
        const { dislikeArticle, history } = this.props;
        this.status();
        dislikeArticle(articleSlug, history);
    };

    render() {
        const { article, loading, auth } = this.props;
        const { likedStatus, dislikedStatus } = this.state;

        if (loading|| this.props.profile.loading ) {
            return (
                <div>
                    <Loader />
                </div>
            );
        }
        return (
            <div>
                {article === null ? (
                    <NotFoundPage />
                ) : (
                    <Article
                        article={article}
                        auth={auth}
                        likedStatus={likedStatus}
                        dislikedStatus={dislikedStatus}
                        onHandleLike={this.like}
                        onHandleDislike={this.dislike}
                    />
                )}
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => ({
    dislikeArticle: (articleSlug, history) =>
        dispatch(dislikeArticle(articleSlug, history)),
    likeArticle: (articleSlug, history) =>
        dispatch(likeArticle(articleSlug, history)),
    getArticle: articleSlug => dispatch(getArticle(articleSlug)),
    getCurrentProfile: dispatch(getCurrentProfile()),
});
GetArticleView.propTypes = {
    getArticle: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
    likeArticle: PropTypes.func,
    dislikeArticle: PropTypes.func,
};
export const mapStateToProps = state => ({
    article: state.articles.article,
    profile: state.profile,
    auth: state.auth,
    loading: state.articles.loading,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetArticleView));
