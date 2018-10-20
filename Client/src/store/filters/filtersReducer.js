import { FILTERS_LOADING, FILTERS_LOADED, COLUMNS_SELECTED } from "../actionTypes";

const initialState = {
    filters: [],
    selectedColumns: [ 'Id', 'Name'],
    state: "not loaded"
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case FILTERS_LOADING:
            return { 
                ...state, 
                state: action.payload.state 
            }
        case FILTERS_LOADED:
            return { 
                ...state,
                 state: action.payload.state,
                filters: action.payload.data 
            }
        case COLUMNS_SELECTED:
            console.log(initialState);
            return { 
                ...state,
                selectedColumns: action.payload.columns 
            }
        default:
            return state;
    }
}