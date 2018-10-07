import { FILTERS_LOADING, FILTERS_LOADED } from "../actionTypes";
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'

function filtersLoading() { 
    return { 
        type: FILTERS_LOADING, 
        payload: { 
            state: "loading" 
        } 
    }; 
} 
    
function filtersLoaded(data) {
    return { 
        type: FILTERS_LOADED, 
        payload: { 
            state: "loaded", 
            data
        } 
    }; 
}
    
export function loadFilters() {
    return (dispatch) => { 
        dispatch(filtersLoading); 
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/vulnerability/getFilters', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(filtersLoaded(data)); 
            }) 
            .catch((err) => {
                throw err; 
            }) 
    } 
}