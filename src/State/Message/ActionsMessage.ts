import {InferActionsTypes} from "../Types/InferActionsType";

export const SET_HIDDEN = 'SET_HIDDEN'
export const SET_MESSAGE = 'SET_MESSAGE'

export const actionMessage = {
    setHidden: (isHidden: boolean) => ({type: SET_HIDDEN, isHidden} as const),
    setMessage: (message: string) => ({type: SET_MESSAGE, message} as const)
}

export type ActionMessageType = InferActionsTypes<typeof actionMessage>
