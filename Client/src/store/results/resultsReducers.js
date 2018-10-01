import { RESULTS_LOADING, RESULTS_LOADED } from "../actionTypes";

const initialState = {
    results: [],
    state: "not loaded"
}

export default function resultsReducer(state = initialState, action) {
    switch (action.type) {
        case RESULTS_LOADING:
            return { 
                ...state,
                state: action.payload.state
            }

        case RESULTS_LOADED:
            return {
                ...state,
                state: action.payload.state,
                results: action.payload.data
            }

        default:
            return state;
    }
}