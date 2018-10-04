import { RESULTS_LOADING, RESULTS_LOADED } from "../actionTypes";
    
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
        const fetchOptions = {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/javascript, */*',
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(options)
        };
        fetch('/api/getResults', fetchOptions)
            .then((result) => result.json())
            .then((data) => { 
                dispatch(resultsLoaded(data)); 
            }) 
            .catch((err) => { 
                throw err; 
            }) 
    } 
}