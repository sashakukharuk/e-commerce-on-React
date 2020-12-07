import {PositionType} from "./PositionType";

export type InitialBasketType = {
    orders: PositionType[]
    order: PositionType
    message: string
    hidden: boolean
    isPreloader: boolean
    addOrder: (order: PositionType, quantity: number) => void
    removeOrder: (id: string) => void
    compute: () => number
    addOneOrder: (order: PositionType, quantity: number) => void
    clearOrders: () => void
    toast: (message: string) => void
    preloader: (isPre: boolean) => void
}
