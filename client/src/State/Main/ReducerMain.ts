import {MainStateType} from "./StateMain";
import {ActionMainType, SET_POPULAR} from "./ActionsMain";

export const mainReducer = (state: MainStateType, action: ActionMainType) => {
    switch (action.type) {
        case SET_POPULAR: {
            return {...state, popular: action.popular}
        }

        default: return state
    }
}
