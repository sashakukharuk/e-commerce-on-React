import {InferActionsTypes} from "../Types/InferActionsType";
import {Popular} from "../Types/MainType";

export const SET_POPULAR = 'SET_POPULAR'

export const actionMain = {
    setPopular: (popular: Popular[]) => ({type: SET_POPULAR, popular})
}

export type ActionMainType = InferActionsTypes<typeof actionMain>
