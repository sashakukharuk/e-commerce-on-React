import {InferActionsTypes} from "../Types/InferActionsType";
import {PositionType} from "../Types/PositionType";

export const SET_POSITION = 'SET_POSITION'

export const actionPosition = {
    setPosition: (position: PositionType) => ({type: SET_POSITION, position} as const)
}

export type ActionPositionType = InferActionsTypes<typeof actionPosition>
