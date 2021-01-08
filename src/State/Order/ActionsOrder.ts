import {InferActionsTypes} from "../Types/InferActionsType";
import {PositionType} from "../Types/PositionType";
import {SuccessStr} from "../Types/LanguageType";

export const ORDER_SET_LABEL = 'ORDER_SET_LABEL'
export const ORDER_SET_DISABLED = 'ORDER_SET_DISABLED'
export const ORDER_SET_ORDER = 'ORDER_SET_ORDER'
export const ORDER_SET_ORDERS = 'ORDER_SET_ORDERS'
export const ORDER_SET_VALUE = 'ORDER_SET_VALUE'
export const ORDER_SET_SUCCESS = 'ORDER_SET_SUCCESS'
export const ORDER_SET_SUCCESS_STR = 'ORDER_SET_SUCCESS_STR'

export const actionsOrder = {
    setLabel: (key: string, label: string) => ({type: ORDER_SET_LABEL, key, label} as const),
    setDisabled: (isDisabled: boolean) => ({type: ORDER_SET_DISABLED, isDisabled} as const),
    setOrder: (order: PositionType) => ({type: ORDER_SET_ORDER, order} as const),
    setOrders: (orders: PositionType[]) => ({type: ORDER_SET_ORDERS, orders} as const),
    setValue: (key: string, value: string) => ({type: ORDER_SET_VALUE, key, value} as const),
    setSuccess: (success: boolean) => ({type: ORDER_SET_SUCCESS, success} as const),
    setSuccessStr: (successStr: SuccessStr) => ({type: ORDER_SET_SUCCESS_STR, successStr} as const)
}

export type ActionsOrderType = InferActionsTypes<typeof actionsOrder>
