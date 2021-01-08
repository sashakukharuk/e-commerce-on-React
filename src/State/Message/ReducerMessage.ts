import {MessageStateType} from "./StateMessage";
import {ActionMessageType, SET_HIDDEN, SET_MESSAGE} from "./ActionsMessage";


export const messageReducer = (state: MessageStateType, action: ActionMessageType) => {
    switch (action.type) {
        case SET_HIDDEN: {
            return {...state, hidden: action.isHidden}
        }
        case SET_MESSAGE: {
            return {...state, message: action.message}
        }

        default: return state
    }
}
