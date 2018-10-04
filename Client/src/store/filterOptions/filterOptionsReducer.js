import { FILTER_OPTIONS_SET_PAGE, FILTER_OPTIONS_SET_WHERE, FILTER_OPTIONS_SET_ORDERBY } from "../actionTypes";

const defaultTake = 10;
const initialState = {
    take: 10,
    skip: 0,
    orderBy: '',
    whereFilters: []
}

function mapDictionaryToFilter(dictionary){
    var result = [];
    for (var propertyName in dictionary){
        const value = dictionary[propertyName];
        if(value){
            result.push({
                propertyName: propertyName,
                value: dictionary[propertyName]
            })
        }
    }

    return result;
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
                whereFilters: mapDictionaryToFilter(action.payload.whereEqualsOptions)
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