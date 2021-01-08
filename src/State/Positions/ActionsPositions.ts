import {InferActionsTypes} from "../Types/InferActionsType";
import {PositionsType} from "../Types/PositionsType";

export const POSITIONS_SET_POSITIONS = 'POSITIONS_SET_POSITIONS'
export const POSITIONS_SET_DISABLED = 'POSITIONS_SET_DISABLED'
export const POSITIONS_SET_IS_SIZE = 'POSITIONS_SET_IS_SIZE'
export const POSITIONS_SET_LABEL = 'POSITIONS_SET_LABEL'

export const actionPositions = {
    setPositions: (position: PositionsType[]) => ({type: POSITIONS_SET_POSITIONS, position} as const),
    setDisabled: (disabled: boolean) => ({type: POSITIONS_SET_DISABLED, disabled} as const),
    setIsSize: (isSize: boolean) => ({type: POSITIONS_SET_IS_SIZE, isSize} as const),
    setLabel: (key: string, label: string) => ({type: POSITIONS_SET_LABEL, key, label} as const)
}

export type ActionPositionsType = InferActionsTypes<typeof actionPositions>
