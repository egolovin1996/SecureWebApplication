import { 
    FILTER_OPTIONS_SET_PAGE,
    FILTER_OPTIONS_SET_WHERE,
    FILTER_OPTIONS_SET_ORDERBY,
    FILTER_OPTIONS_SET_TAKE,
    FILTER_OPTIONS_SET_SKIP
            } from "../actionTypes";

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
                skip: state.take * action.payload.pageNumber
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
        case FILTER_OPTIONS_SET_TAKE:
            return { 
                ...state,
                take: action.payload.take
            }
        case FILTER_OPTIONS_SET_SKIP:
            return { 
                ...state,
                skip: action.payload.skip
            }
        default:
            return state;
    }
}