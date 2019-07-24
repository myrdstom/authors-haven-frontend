import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorReducer from './errorReducer';

const mainReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer
});
export default mainReducer;
