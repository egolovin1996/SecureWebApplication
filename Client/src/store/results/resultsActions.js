import { RESULTS_LOADED } from '../actionTypes';
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
        
export function loadResults(options) {
    return (dispatch) => {
        const requestOptions = {
            method: "POST",
            headers: getAuthHeader(), 
            body: JSON.stringify(options)
        };
        fetch('/api/vulnerability/getResult', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(resultsLoaded(data)); 
            }) 
            .catch((err) => { 
                throw err; 
            }) 
    } 

    function resultsLoaded(data) {
        return {
            type: RESULTS_LOADED, 
            payload: { 
                vulnerabilities: data.vulnerabilities,
                totalCount: data.totalCount
            } 
        }; 
    }
}