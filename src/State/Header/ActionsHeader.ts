import {InferActionsTypes} from "../Types/InferActionsType";

export const SET_NEW_LANGUAGE = 'SET_NEW_LANGUAGE'
export const SET_AUTH = 'SET_AUTH'
export const SET_LANGUAGE = 'SET_LANGUAGE'

export const actionHeader = {
    setNewLanguage: (newLanguage: string) => ({type: SET_NEW_LANGUAGE, newLanguage} as const),
    setAuth: (isAuth: boolean) => ({type: SET_AUTH, isAuth} as const),
    setLanguage: (isLanguage: boolean) => ({type: SET_LANGUAGE, isLanguage} as const)
}

export type ActionHeaderType = InferActionsTypes<typeof actionHeader>
