import { RESULTS_LOADING, RESULTS_LOADED } from '../actionTypes';
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
    
function resultsLoading() { 
    return { 
        type: RESULTS_LOADING, 
        payload: { 
            state: "loading" 
        } 
    }; 
} 
    
function resultsLoaded(data) {
    return { 
        type: RESULTS_LOADED, 
        payload: { 
            state: "loaded", 
            data 
        } 
    }; 
}
    
export function loadResults(options) {
    return (dispatch) => {
        dispatch(resultsLoading);
        const requestOptions = {
            method: "POST",
            headers: getAuthHeader(), 
            body: JSON.stringify(options)
        };
        fetch('/api/vulnerability/getResults', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(resultsLoaded(data)); 
            }) 
            .catch((err) => { 
                throw err; 
            }) 
    } 
}