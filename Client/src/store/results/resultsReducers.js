import { RESULTS_LOADED } from "../actionTypes";

const initialState = {
    vulnerabilities: [],
    totalCount: 0
}

export default function resultsReducer(state = initialState, action) {
    switch (action.type) {
        case RESULTS_LOADED:
            return {
                ...state,
                vulnerabilities: action.payload.vulnerabilities,
                totalCount: action.payload.totalCount
            }

        default:
            return state;
    }
}