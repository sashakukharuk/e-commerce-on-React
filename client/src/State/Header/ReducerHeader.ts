import {HeaderStateType} from "./StateHeader";
import {ActionHeaderType, SET_AUTH, SET_LANGUAGE, SET_NEW_LANGUAGE} from "./ActionsHeader";


export const headerReducer = (state: HeaderStateType, action: ActionHeaderType) => {
    switch (action.type) {
        case SET_NEW_LANGUAGE: {
            return {...state, nowLanguage: action.newLanguage}
        }
        case SET_AUTH: {
            return {...state, isAuth: action.isAuth}
        }
        case SET_LANGUAGE: {
            return {...state, isLanguage: action.isLanguage}
        }

        default: return state
    }
}
