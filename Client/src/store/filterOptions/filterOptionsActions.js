import { 
    FILTER_OPTIONS_SET_PAGE, 
    FILTER_OPTIONS_SET_WHERE, 
    FILTER_OPTIONS_SET_ORDERBY } from "../actionTypes";
    
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
            columnName: columnName
        } 
    }; 
}
    