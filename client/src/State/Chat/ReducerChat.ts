import {ChatStateType} from "./StateChat";
import {ActionChatType, SET_CHAT, SET_CLIENT_ID, SET_CLOSE_CHAT, SET_HIDE_CHAT, SET_MESSAGE} from "./ActionsChat";

export const chatReducer = (state: ChatStateType, action: ActionChatType) => {
    switch (action.type) {
        case SET_CHAT: {
            return {...state, chat: action.chat}
        }
        case SET_MESSAGE: {
            return {...state, message: action.message}
        }
        case SET_CLIENT_ID: {
            return {...state, clientId: action.id}
        }
        case SET_HIDE_CHAT: {
            return {...state, isHide: action.isHide}
        }
        case SET_CLOSE_CHAT: {
            return {...state, isCLose: action.isClose}
        }

        default: return state
    }
}
