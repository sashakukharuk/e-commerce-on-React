import {ActionLanguageType, SET_KEY, SET_LANGUAGE} from "./ActionsLanguage";
import {LanguageStateType} from "./StateLanguage";

export const languageReducer = (state: LanguageStateType, action: ActionLanguageType) => {
    switch (action.type) {
        case SET_LANGUAGE: {
            return {...state, language: action.language}
        }
        case SET_KEY: {
            return {...state, key: action.key}
        }

        default: return state
    }
}
