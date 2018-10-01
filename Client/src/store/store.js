import { createStore, combineReducers } from "redux";
import filtersReducer from './filters/filtersReducer';
import resultsReducer from './results/resultsReducers';
import filterOptionsReducer from './filterOptions/filterOptionsReducer';

const store = createStore(combineReducers(
    {
        filters: filtersReducer,
        results: resultsReducer,
        filterOptions: filterOptionsReducer
    }
));

export default store;