import React, {useContext, useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {basketReducer} from "./ReducerBasket";
import {basketState} from "./StateBasket";
import {actionBasket} from "./ActionsBasket";
import {InitialBasketType} from "../Types/BasketType";
import {PositionType} from "../Types/PositionType";
import {LanguageContext} from "../Language/LanguageProvider";

export const BasketContext = React.createContext<InitialBasketType>({} as InitialBasketType)

type PropsType = {
    toast$: EventEmitter<string>
    openModal$: EventEmitter<void>
    addPositionBasket$: EventEmitter<{position: PositionType, quantity: number}>
    clearOrders$: EventEmitter<void>
    children: any
}

export const BasketProvider = ({toast$, openModal$, addPositionBasket$, clearOrders$, children}: PropsType) => {

    const [state, dispatch] = useReducer(basketReducer, basketState)

    const {language} = useContext(LanguageContext)

    addPositionBasket$.useSubscription((val) => addOrder(val.position, val.quantity))
    openModal$.useSubscription(() => openModal())
    clearOrders$.useSubscription(() => clearOrders())

    const addOrder = (position: PositionType, quantity: number): void => {
        const candidate = state.orders.find(o => o._id === position._id)
        if (candidate) {
            candidate.quantity += quantity
        } else {
            position.quantity = quantity
            state.orders.push(position)
        }
        dispatch(actionBasket.setOrders(state.orders))
        toast$.emit(language.addBasketL)
    }

    const openModal = (): void => {
        dispatch(actionBasket.setModal(!state.isModal))
    }

    const removeOrder = (id: string) => {
        dispatch(actionBasket.removeOrder(id))
    }

    const clearOrders = () => {
        let orders: PositionType[] = []
        dispatch(actionBasket.setOrders(orders))
    }

    const compute = (): number => {
        return state.orders.reduce((total, item) => {
            total += item.quantity * item.price
            return total
        }, 0)
    }

    const value = {
        orders: state.orders,
        isModal: state.isModal,
        removeOrder,
        compute,
        clearOrders,
        openModal,
    }

    return <BasketContext.Provider value={value}>
        {state.isModal && children}
    </BasketContext.Provider>
}
