import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import profileReducer from './profileReducer';
import errorReducer from './errorReducer';

const mainReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
});
export default mainReducer;
