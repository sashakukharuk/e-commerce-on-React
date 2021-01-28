import {AuthStateType} from "./StateAuth";
import {
    ActionAuthType,
    AUTH_SET_DISABLED,
    AUTH_SET_LABEL,
    AUTH_SET_SUCCESS,
    AUTH_SET_SUCCESS_STR,
} from "./ActionsAuth";


export const preloaderAuth = (state: AuthStateType, action: ActionAuthType) => {
    switch (action.type) {
        case AUTH_SET_LABEL: {
            // @ts-ignore
            return {...state, [action.key]: {...state[action.key], label: action.label}}
        }
        case AUTH_SET_DISABLED: {
            return {...state, disabled: action.isDisabled}
        }
        case AUTH_SET_SUCCESS: {
            return {...state, success: action.success}
        }
        case AUTH_SET_SUCCESS_STR: {
            return {...state, successStr: action.successStr}
        }

        default: return state
    }
}
