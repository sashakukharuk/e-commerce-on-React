import {ActionPreloaderType, IS_PRELOADER} from "./ActionsPreloader";
import {PreloaderStateType} from "./StatePreloader";

export const preloaderReducer = (state: PreloaderStateType, action: ActionPreloaderType) => {
    switch (action.type) {
        case IS_PRELOADER: {
            return {...state, isPreloader: action.isPreloader}
        }

        default: return state
    }
}
