import React, {useEffect, useState} from "react";
import axios from 'axios'

type ImgSmall = {
    img: string;
}

export type PositionType = {
    _id: string;
    imgMain: string;
    imgLarge: string;
    imgSmall: Array<ImgSmall>;
    name: string;
    price: number;
    size: string;
    overview: string;
    categoryId: string;
    quantity: number;
}

export type InitialPositionType = {
    position?: PositionType,
    getPosition?: (id: string) => void,
    dispatchQuantity?: (quantity: number) => void,
    addOrder?: (T: PositionType) => void
    orders?: PositionType[],
    removeOrder?: (id: string) => void
    compute?: () => number
    getOrders?: () => PositionType[]
}


export const PositionContext = React.createContext<InitialPositionType>({} as InitialPositionType)

export const PositionState = (props: any) => {

    let [position, setPosition] = useState<PositionType>({} as PositionType)
    let [orders, setOrders] = useState<PositionType[]>([])

    useEffect(() => {}, [position])

    const getPosition = async (id: string): Promise<void> => {
        console.log("Request position")
        const data = await axios.get(`http://localhost:5000/api/position/${id}`).then(res => res.data)
        setPosition(data)
    }

    const dispatchQuantity = (quantity: number): void => {
        const editedPosition = {...position, quantity: quantity}
        setPosition(editedPosition)
    }

    const addOrder = (order: PositionType): void => {
        debugger
        const candidate = orders.find(o => o._id === order._id)
        candidate ? candidate.quantity += +order.quantity : orders.push(order)
        setOrders(orders)
    }

    const removeOrder = (id: string) => {
        const idx = orders.findIndex(p => p._id === id);
        orders.splice(idx, 1);
        setOrders(orders)
    }

    const compute = (): number => {
        return orders.reduce((total, item) => {
            total += item.quantity * item.price
            return total
        }, 0)
    }

    const getOrders = (): PositionType[] => {
        debugger
        return orders
    }

    return <PositionContext.Provider value={{position, getPosition, dispatchQuantity, addOrder, orders, removeOrder, compute, getOrders}}>
        {props.children}
    </PositionContext.Provider>
}
