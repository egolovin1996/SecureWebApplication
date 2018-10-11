import { MENU_LOADED, MENU_CLEAR } from "../actionTypes";

const initialState = {
    menuItems: []
}

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case MENU_LOADED:
            return {
                ...state,
                menuItems: action.payload.menuItems,
            }
        case MENU_CLEAR:
            return {
                ...state,
                menuItems: [],
            }
        default:
            return state;
    }
}