import { IS_LOADING, LOADING_SUCCESS } from '../actions/types';

const initialState = {
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
