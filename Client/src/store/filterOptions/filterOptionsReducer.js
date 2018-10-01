import { FILTER_OPTIONS_SET_PAGE, FILTER_OPTIONS_SET_WHERE, FILTER_OPTIONS_SET_ORDERBY } from "../actionTypes";

const defaultTake = 10;
const initialState = {
    take: 10,
    skip: 0,
    orderBy: '',
    whereEqualsOptions: []
}

export default function filterOptionsReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_OPTIONS_SET_PAGE:
            return { 
                ...state,
                skip: defaultTake * action.payload.pageNumber
            }

        case FILTER_OPTIONS_SET_WHERE:
            return { 
                ...state, 
                whereEqualsOptions: action.payload.whereEqualsOptions
            }

        case FILTER_OPTIONS_SET_ORDERBY:
            return { 
                ...state,
                orderBy: action.payload.columnName
            }

        default:
            return state;
    }
}