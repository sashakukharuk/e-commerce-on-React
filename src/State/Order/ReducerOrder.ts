import {OrderStateType} from "./StateOrder";
import {
    ActionsOrderType, ORDER_SET_DISABLED, ORDER_SET_LABEL,
    ORDER_SET_ORDER, ORDER_SET_ORDERS, ORDER_SET_SUCCESS, ORDER_SET_SUCCESS_STR, ORDER_SET_VALUE
} from "./ActionsOrder";

export const orderReducer = (state: OrderStateType, action: ActionsOrderType) => {
    switch (action.type) {
        case ORDER_SET_LABEL: {
            // @ts-ignore
            return {...state, [action.key]: {...state[action.key], label: action.label}}
        }
        case ORDER_SET_DISABLED: {
            return {...state, disabled: action.isDisabled}
        }
        case ORDER_SET_ORDER: {
            return {...state, order: action.order}
        }
        case ORDER_SET_ORDERS: {
            return {...state, orders: action.orders}
        }
        case ORDER_SET_VALUE: {
            // @ts-ignore
            return {...state, [action.key]: {...state[action.key], value: action.value}}
        }
        case ORDER_SET_SUCCESS: {
            return {...state, success: action.success}
        }
        case ORDER_SET_SUCCESS_STR: {
            return {...state, successStr: action.successStr}
        }

        default: return state
    }
}
