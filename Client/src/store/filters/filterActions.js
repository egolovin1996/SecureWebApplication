import { FILTERS_LOADING, FILTERS_LOADED, COLUMNS_SELECTED } from "../actionTypes";
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
    
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

    function filtersLoaded(data) {
        return { 
            type: FILTERS_LOADED, 
            payload: { 
                state: "loaded", 
                data
            } 
        }; 
    }

    function filtersLoading() { 
        return { 
            type: FILTERS_LOADING, 
            payload: { 
                state: "loading" 
            } 
        }; 
    } 
}

export function selectColumns(columns) {
    return (dispatch) => { 
        dispatch(selectColumns(columns)); 
    } 

    function selectColumns(columns) { 
        return { 
            type: COLUMNS_SELECTED, 
            payload: { 
                columns
            } 
        }; 
    } 
}