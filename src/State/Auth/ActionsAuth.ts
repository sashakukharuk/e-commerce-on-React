import {InferActionsTypes} from "../Types/InferActionsType";
import {SuccessStr} from "../Types/LanguageType";

export const AUTH_SET_LABEL = 'AUTH_SET_LABEL'
export const AUTH_SET_DISABLED = 'AUTH_SET_DISABLED'
export const AUTH_SET_SUCCESS = 'AUTH_SET_SUCCESS'
export const AUTH_SET_SUCCESS_STR = 'AUTH_SET_SUCCESS_STR'

export const actionAuth = {
    setLabel: (key: string, label: string) => ({type: AUTH_SET_LABEL, key, label} as const),
    setDisabled: (isDisabled: boolean) => ({type: AUTH_SET_DISABLED, isDisabled} as const),
    setSuccess: (success: boolean) => ({type: AUTH_SET_SUCCESS, success} as const),
    setSuccessStr: (successStr: SuccessStr) => ({type: AUTH_SET_SUCCESS_STR, successStr} as const)
}

export type ActionAuthType = InferActionsTypes<typeof actionAuth>
