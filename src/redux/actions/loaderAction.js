import {IS_LOADING, LOADING_SUCCESS} from './types';

export const setLoading = () => {
    return {
        type: IS_LOADING
    }
}

export const loadingSuccess = () =>{
    return {
        type: LOADING_SUCCESS
    }
}

