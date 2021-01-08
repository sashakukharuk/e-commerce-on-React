import {InferActionsTypes} from "../Types/InferActionsType";
import {PositionType} from "../Types/PositionType";

export const BASKET_SET_ORDERS = 'BASKET_SET_ORDERS'
export const BASKET_REMOVE_ORDER = 'BASKET_REMOVE_ORDER'
export const BASKET_SET_IS_MODAL = 'BASKET_SET_IS_MODAL'

export const actionBasket = {
    setOrders: (orders: PositionType[]) => ({type: BASKET_SET_ORDERS, orders} as const),
    removeOrder: (id: string) => ({type: BASKET_REMOVE_ORDER, id} as const),
    setModal: (isModal: boolean) => ({type: BASKET_SET_IS_MODAL, isModal} as const)
}

export type ActionsBasketType = InferActionsTypes<typeof actionBasket>
