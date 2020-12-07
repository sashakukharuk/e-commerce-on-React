import React, {useContext, useState} from "react";
import {InitialBasketType} from "./Types/BasketType";
import {PositionType} from "./Types/PositionType";
import {LanguageContext} from "./LanguageState";

export const BasketContext = React.createContext<InitialBasketType>({} as InitialBasketType)

export const BasketState = (props: any) => {
    const {language} = useContext(LanguageContext)
    let [orders, setOrders] = useState<PositionType[]>([])
    let [order, setOrder] = useState<PositionType>({} as PositionType)
    let [hidden, setHidden] = useState(false)
    let [message, setMessage] = useState('')
    let [isPreloader, setPreloader] = useState(false)

    const addOrder = (order: PositionType, quantity: number): void => {
        const candidate = orders.find(o => o._id === order._id)
        if (candidate) {
            candidate.quantity += quantity
        } else {
            order.quantity = quantity
            orders.push(order)
        }
        setOrders(orders)
        toast(language.addBasketL)
    }

    const removeOrder = (id: string) => {
        const editedOrder = orders.filter(o => o._id !== id);
        setOrders(editedOrder)
    }

    const clearOrders = () => {
        orders = []
        setOrders(orders)
    }

    const compute = (): number => {
        return orders.reduce((total, item) => {
            total += item.quantity * item.price
            return total
        }, 0)
    }

    const addOneOrder = (order: PositionType, quantity: number) => {
        order.quantity = quantity
        setOrder(order)
    }

    const toast = (message: string): void => {
        setMessage(message)
        setHidden(true)
        new Promise((resolve) => {
            const timeout: any = setTimeout(() => {
                setHidden(false)
                resolve(timeout);
            }, 3000);
        }).then((timeout: any) => clearTimeout(timeout));
    }

    const preloader = (isPre: boolean) => {
        setPreloader(isPre)
    }

    return <BasketContext.Provider value={{orders, order, message, hidden, isPreloader, addOrder, removeOrder, compute, addOneOrder, clearOrders, toast, preloader}}>
        {props.children}
    </BasketContext.Provider>
}
