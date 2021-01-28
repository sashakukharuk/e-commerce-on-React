import {BasketStateType} from "./StateBasket";
import {
    ActionsBasketType,
    BASKET_REMOVE_ORDER,
    BASKET_SET_IS_MODAL,
    BASKET_SET_ORDERS
} from "./ActionsBasket";

export const basketReducer = (state: BasketStateType, action: ActionsBasketType) => {
    switch (action.type) {
        case BASKET_SET_ORDERS: {
            return {...state, orders: action.orders}
        }
        case BASKET_REMOVE_ORDER: {
            return {...state, orders: state.orders.filter(o => o._id !== action.id)}
        }
        case BASKET_SET_IS_MODAL: {
            return {...state, isModal: action.isModal}
        }

        default: return state
    }
}
