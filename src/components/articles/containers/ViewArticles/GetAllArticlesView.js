import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../../Loader';
import GetArticlesWrapper from '../../component/Articles/getArticlesWrapper';
import GetArticle from './GetArticle';
import { getAllArticles } from '../../../../redux/actions/articles/articlesAction';
import { getCurrentProfile } from '../../../../redux/actions/profile/profileActions';

class GetAllArticlesView extends Component {
    render() {
        const {articles, loading} = this.props.articles;

        return (
            <div>

                {
                    loading || this.props.profile.loading ?
                    <div>
                        <Loader/>
                    </div>:
                    <div>
                        <GetArticlesWrapper/>
                        < GetArticle
                        articles={articles}
                        />
                    </div>
            }
            </div>

        );
    }
}

export const mapDispatchToProps = dispatch => ({
    getAllArticles: dispatch(getAllArticles()), //Look into this getAllArticles dispatch
    getCurrentProfile: dispatch(getCurrentProfile()),

});

GetAllArticlesView.propTypes = {
    articles: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
    articles: state.articles,
    profile: state.profile,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GetAllArticlesView));
