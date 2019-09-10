import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import loadingReducer from './loadingReducer'

const mainReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    isLoading: loadingReducer,
    errors: errorReducer
});
export default mainReducer;
