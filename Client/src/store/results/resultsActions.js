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
    
export function loadResults() {
    return (dispatch) => { 
        dispatch(resultsLoading); 
        fetch('/api/getResults')
            .then((data) => { 
                dispatch(resultsLoaded(data)); 
            }) 
            .catch((err) => { 
                //dispatch(error); 
                throw err; 
            }) 
    } 
}