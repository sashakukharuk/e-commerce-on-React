import React, {useContext, useEffect, useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {orderReducer} from "./ReducerOrder";
import {orderState} from "./StateOrder";
import {InitialOrderType, OrderFormType} from "../Types/OrderType";
import {PositionType} from "../Types/PositionType";
import {LanguageContext} from "../Language/LanguageProvider";
import {requestOrder, requestProfile} from "../../Request/Request";
import {actionsOrder} from "./ActionsOrder";

export const OrderContext = React.createContext<InitialOrderType>({} as InitialOrderType)

type PropsType = {
    toast$:  EventEmitter<string>
    preloader$:  EventEmitter<boolean>
    addPositionOrder$:  EventEmitter<{position: PositionType, quantity: number}>
    addOrders$:  EventEmitter<{orders: PositionType[]}>
    children: any
}

export const OrderProvider = ({toast$, preloader$, addPositionOrder$, addOrders$, children}: PropsType) => {

    const [state, dispatch] = useReducer(orderReducer, orderState)

    const {language} = useContext(LanguageContext)

    useEffect(() => {
        dispatch(actionsOrder.setLabel('firstName', language.firstNameL))
        dispatch(actionsOrder.setLabel('lastName', language.lastNameL))
        dispatch(actionsOrder.setLabel('phone', language.phoneNumberL))
        dispatch(actionsOrder.setLabel('email', language.emailL))
        dispatch(actionsOrder.setLabel('city', language.cityL))
        dispatch(actionsOrder.setLabel('novaPosh', language.deliveryPointL))
        dispatch(actionsOrder.setSuccessStr(language.successStrOrder))
    }, [language])

    addPositionOrder$.useSubscription(({position, quantity}) => addOneOrder(position, quantity))
    addOrders$.useSubscription(({orders}) => dispatch(actionsOrder.setOrders(orders)))

    const addOneOrder = (position: PositionType, quantity: number) => {
        position.quantity = quantity
        dispatch(actionsOrder.setOrder(position))
    }


    const createOrder = async (form: OrderFormType, orders: PositionType[]) => {
        preloader$.emit(true)
        form.list = orders.map(o => {
            return {positionId: o._id, quantity: o.quantity};
        })
        dispatch(actionsOrder.setDisabled(true))
        await requestOrder.create(form)
            .then(() => {
                dispatch(actionsOrder.setSuccess(true))
                dispatch(actionsOrder.setDisabled(false))
                preloader$.emit(false)
            })
            .catch(error => {
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const initialProfile = async () => {
        const token = localStorage.getItem('auth-token')
        token && await requestProfile.getProfile(token).then(res => {
            dispatch(actionsOrder.setValue('firstName', res.data.firstName))
            dispatch(actionsOrder.setValue('lastName', res.data.lastName))
            dispatch(actionsOrder.setValue('phone', res.data.phone))
        })
        .catch(error => toast$.emit(error.response.data.message))
    }

    const closeSuccessPage = () => {
        dispatch(actionsOrder.setSuccess(false))
    }

    const value = {
        order: state.order,
        orders: state.orders,
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        email: state.email,
        city: state.city,
        novaPosh: state.novaPosh,
        successStr: state.successStr,
        disabled: state.disabled,
        success: state.success,
        createOrder,
        initialProfile,
        closeSuccessPage
    }

    return <OrderContext.Provider
        value={value}>
        {children}
    </OrderContext.Provider>
}




