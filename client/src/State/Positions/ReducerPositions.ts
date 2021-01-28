import {PositionsStateType} from "./StatePositions";
import {
    ActionPositionsType,
    POSITIONS_SET_DISABLED,
    POSITIONS_SET_LABEL,
    POSITIONS_SET_POSITIONS
} from "./ActionsPositions";

export const positionsReducer = (state: PositionsStateType, action: ActionPositionsType) => {
    switch (action.type) {
        case POSITIONS_SET_POSITIONS: {
            return {...state, positions: action.position}
        }
        case POSITIONS_SET_DISABLED: {
            return {...state, disabled: action.disabled}
        }
        case POSITIONS_SET_LABEL: {
            // @ts-ignore
            return {...state, [action.key]: {...state[action.key], label: action.label}}
        }

        default: return state
    }
}
