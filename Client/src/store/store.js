import { createStore, combineReducers, applyMiddleware } from "redux";
import filtersReducer from './filters/filtersReducer';
import resultsReducer from './results/resultsReducers';
import filterOptionsReducer from './filterOptions/filterOptionsReducer';
import thunk from "redux-thunk"; 

const store = createStore(combineReducers(
    {
        filters: filtersReducer,
        results: resultsReducer,
        filterOptions: filterOptionsReducer
    }
), applyMiddleware(thunk));

export default store;