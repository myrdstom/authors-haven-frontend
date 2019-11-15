import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RenderArticles from '../../component/RenderArticles';

class ArticleItem extends Component {
    render() {
        const {article, auth} = this.props;
        return (
            <div>
                <RenderArticles article={article}/>
                </div>


        );
    }
}

ArticleItem.propTypes = {
    article: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};
export const mapStateToProps = state => ({
    auth: state.auth

});

export default connect(mapStateToProps)(ArticleItem);