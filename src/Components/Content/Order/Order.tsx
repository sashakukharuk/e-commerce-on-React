import React, {useContext, useEffect} from 'react'
import {useParams} from "react-router-dom";
import o from './Order.module.css'
import {OrderCard} from "./OrderCard";
import {OrderFormType} from "../../../State/Types/OrderType";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {LanguageContext} from "../../../State/Language/LanguageProvider";
import {OrderContext} from "../../../State/Order/OrderProvider";
import {FormControl} from "../../Component/Form/FormControl";
import {SuccessPage} from "../../Component/SuccessPage/SuccessPage";

type PropsType = {
    clearOrders$: EventEmitter<void>
}

export const Order = ({clearOrders$}: PropsType) => {
    const {language} = useContext(LanguageContext)
    const {id} = useParams<{id: string}>()
    const {order, orders, firstName, lastName, phone, email, city, novaPosh, successStr, disabled, success, createOrder, initialProfile, closeSuccessPage} = useContext(OrderContext)

    useEffect(() => {
        initialProfile()
    }, [id])

    const confirmOrder = (form: OrderFormType) => {
        const confirmOrders = id ? [order] : orders
        createOrder(form, confirmOrders)
        clearOrders$.emit()
    }

    if (success) {
        return <SuccessPage successStr={successStr} url={'/'} close={closeSuccessPage}/>
    }

    return <div className={o.orderBlock}>
        <div className={o.orderForm}>
            <FormControl
                order={true}
                id={id}
                name={language.orderL}
                language={language}
                args={[firstName, lastName, phone, email, city, novaPosh]}
                disabled={disabled}
                callBack={(form) => confirmOrder(form)}
            />
        </div>
        <div className={o.orderBlockCard}>
            {id ? <OrderCard language={language} order={order}/> : orders.map(o =>  <OrderCard language={language} order={o} key={o._id}/>)}
        </div>
    </div>
}
