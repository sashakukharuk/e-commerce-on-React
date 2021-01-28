import {InferActionsTypes} from "../Types/InferActionsType";

export const IS_PRELOADER = 'IS_PRELOADER'

export const actionPreloader = {
    setPreloader: (isPreloader: boolean) => ({type: IS_PRELOADER, isPreloader})
}

export type ActionPreloaderType = InferActionsTypes<typeof actionPreloader>
