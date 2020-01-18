import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {GET_ARTICLE, GET_ARTICLES} from '../../../../redux/actions/types';
import {getAllArticles} from '../../../../redux/actions/articles/articlesAction';