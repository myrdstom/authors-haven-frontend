import React from 'react';
import getArticles from '../../../../assets/images/articles/getarticles.png';
import { Link } from 'react-router-dom';

const GetArticlesWrapper = () => {
    return (
        <div className="articles__container">
            <div className="row">
                <div className="col-7">
                    <div className="wrapper__image-container">
                        <img
                            className="articles__wrapper"
                            src={getArticles}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-5">
                    <div className="wrapper__text-container">
                        <div className="wrapper__text">
                            <h1>LISTICLE</h1>
                        <div>
                            <h3>Where writers meet readers</h3>
                        </div>
                        <div className="aside__login-button">
                            <h3>
                                <button
                                    className="btn btn-primary my-2 my-sm-0"
                                    type="submit"
                                >
                                    <Link
                                        to="/login"
                                        className="authentication__login--link"
                                    >
                                        {' '}
                                        <span className="small-font">
                                            Start Reading
                                        </span>
                                    </Link>
                                </button>
                            </h3>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="labels__row">
                    <button type="button" className="btn btn-primary">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/chromecast-cast-button.png" alt="" />
                        </span>{' '}
                        Popular
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/broken-robot.png" alt=""/>
                        </span>{' '}
                        Tech
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/chichen-itza.png" alt=""/>
                        </span>{' '}
                        Culture
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/heart-health.png" alt=""/>
                        </span>{' '}
                        Health
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/greek-helmet.png" alt=""/>
                        </span>{' '}
                        Politics
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/fine-print.png" alt=""/>
                        </span>{' '}
                        Education
                    </button>
                    <button type="button" className="btn btn-light">
                        <span>
                            <img src="https://img.icons8.com/windows/24/000000/clock.png" alt=""/>
                        </span>{' '}
                        History
                    </button>
                    <div className="div">
                        <h1 className="selected__tag">POPULAR TODAY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetArticlesWrapper;
