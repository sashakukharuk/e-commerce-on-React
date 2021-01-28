import {PositionType} from "./PositionType";

export type InitialBasketType = {
    orders: PositionType[]
    isModal: boolean
    removeOrder: (id: string) => void
    compute: () => number
    clearOrders: () => void
    openModal: () => void
}
