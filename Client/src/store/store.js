import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import filtersReducer from './filters/filtersReducer';
import resultsReducer from './results/resultsReducers';
import filterOptionsReducer from './filterOptions/filterOptionsReducer';
import authReducer from './auth/authReducers';
import menuReducer from './menu/menuReducers';
import adminReducer from './admin/adminReducers';
import chatReducer from './chat/chatReducers';

const store = createStore(combineReducers(
    {
        filters: filtersReducer,
        results: resultsReducer,
        filterOptions: filterOptionsReducer,
        auth: authReducer,
        menu: menuReducer,
        admin: adminReducer,
        chat: chatReducer
    }
), applyMiddleware(thunk));

export default store;