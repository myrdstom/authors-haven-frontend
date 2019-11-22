import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../../../assets/images/articles/default.jpg';

const Article = props => {
    const { article, auth } = props;
    return (
        <div className="container">
            <div className="row">
                { auth.user.username === article.author ?
                    <div className="article-favicons">
                        <Link to={{ pathname: `/article/${article.articleSlug}/edit/` }}>
                            <i className="fa fa-pencil edit-article"></i>
                        </Link>
                        <Link to={{ pathname: `/article/${article.articleSlug}/edit/` }}>
                            <i className="fas fa-trash-alt delete-article"></i>
                        </Link>
                    </div>
                : ''}
                <img
                    className="article__box-img"
                    src={defaultImage}
                    alt="The article Image"
                />
                <div className="article__text">
                    <span className="article__title">{article.title}</span>
                    <br />
                    <span className="article__body">{article.body}</span>
                </div>
            </div>
        </div>
    );
};

export default Article;
