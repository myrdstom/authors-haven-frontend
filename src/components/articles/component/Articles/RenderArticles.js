import React  from 'react';
import {Link} from 'react-router-dom'

const stockImage = 'https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20150624200319/150624-The_Current_state_of_blogging_1200x628-01.png';




const  RenderArticles =({article}) => {
    const {articleURL, title, author, articleSlug, likes, dislikes} = article;
    let articleImage = articleURL || stockImage;
        return (
            <div>
                 <div className="col-md-4">
                    <div className="article__box my-2">
                        <div className="image-container">

                            <img className="article-box__img" src={articleImage} alt="The article"/>
                        </div>
                        <div className="text-dark">
                            <div className="article__titles">{title} </div>
                            <div className="article__authors">LIKES: {likes.length - dislikes.length} </div>
                            <span className="article__authors">{author} </span>
                            <button className="view_article">
                                <Link to={{pathname: `/article/${articleSlug}/`}}>More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default RenderArticles;
