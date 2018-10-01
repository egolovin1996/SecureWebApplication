import { FILTERS_LOADING, FILTERS_LOADED } from "../actionTypes";

const initialState = {
    filters: [],
    state: "not loaded"
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case FILTERS_LOADING:
            return { ...state, state: action.payload.state }

        case FILTERS_LOADED:
            return { ...state, state: action.payload.state, filters: action.payload.data }

        default:
            return state;
    }
}