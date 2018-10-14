import { CHATS_LOADED, MESSAGES_LOADED } from "../actionTypes";

const initialState = {
    chats: [],
    messages: []
}

export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        case CHATS_LOADED:
            return {
                ...state,
                chats: action.payload.chats,
            }
        case MESSAGES_LOADED:
            return {
                ...state,
                messages: action.payload.messages,
            }
        default:
            return state;
    }
}