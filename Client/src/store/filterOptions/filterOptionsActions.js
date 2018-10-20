import { 
    FILTER_OPTIONS_SET_PAGE, 
    FILTER_OPTIONS_SET_WHERE, 
    FILTER_OPTIONS_SET_ORDERBY,
    FILTER_OPTIONS_SET_TAKE,
    FILTER_OPTIONS_SET_SKIP
            } from "../actionTypes";
    
export function filterOptionsSetPage(pageNumber) { 
    return { 
        type: FILTER_OPTIONS_SET_PAGE, 
        payload: { 
            pageNumber: pageNumber
        } 
    }; 
} 
    
export function filtersOptionsSetWhere(options) {
    return { 
        type: FILTER_OPTIONS_SET_WHERE,
        payload: { 
            whereEqualsOptions: options
        } 
    }; 
}

export function filtersOptionsSetOrderColumnName(columnName) {
    return { 
        type: FILTER_OPTIONS_SET_ORDERBY,
        payload: { 
            columnName
        } 
    }; 
}
    
export function filtersOptionsSetTake(take) {
    return { 
        type: FILTER_OPTIONS_SET_TAKE,
        payload: { 
            take
        } 
    }; 
}

export function filtersOptionsSetSkip(skip) {
    return { 
        type: FILTER_OPTIONS_SET_SKIP,
        payload: { 
            skip
        } 
    }; 
}