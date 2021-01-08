import {InferActionsTypes} from "../Types/InferActionsType";
import {Language} from "../Types/LanguageType";

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const SET_KEY = 'SET_KEY'

export const actionLanguage = {
    setLanguage: (language: Language) => ({type: SET_LANGUAGE, language} as const),
    setKey: (key: string) => ({type: SET_KEY, key} as const)
}

export type ActionLanguageType = InferActionsTypes<typeof actionLanguage>
