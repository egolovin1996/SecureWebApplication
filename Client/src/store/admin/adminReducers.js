import { USERS_LOADED } from "../actionTypes";

const initialState = {
    users: []
}

export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case USERS_LOADED:
            return {
                ...state,
                users: action.payload.users,
            }
        default:
            return state;
    }
}