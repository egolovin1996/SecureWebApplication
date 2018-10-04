import { FILTERS_LOADING, FILTERS_LOADED } from "../actionTypes";
    
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
        fetch('/api/getFilters')
            .then((result) => result.json())
            .then((data) => { 
                dispatch(filtersLoaded(data)); 
            }) 
            .catch((err) => {
                throw err; 
            }) 
    } 
}