import {PositionStateType} from "./StatePosition";
import {ActionPositionType, SET_POSITION} from "./ActionsPosition";

export const positionReducer = (state: PositionStateType, action: ActionPositionType) => {
    switch (action.type) {
        case SET_POSITION: {
            return {...state, position: action.position}
        }

        default: return state
    }
}
