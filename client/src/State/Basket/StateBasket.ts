import {PositionType} from "../Types/PositionType";

export const basketState = {
    orders: []  as PositionType[],
    isModal: false
}
export type BasketStateType = typeof basketState
