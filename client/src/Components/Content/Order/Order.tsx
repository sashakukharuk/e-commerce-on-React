import React, {useContext, useEffect} from 'react'
import {useParams} from "react-router-dom";
import o from './Order.module.css'
import {OrderCard} from "./OrderCard";
import {LanguageContext} from "../../../State/Language/LanguageProvider";
import {OrderContext} from "../../../State/Order/OrderProvider";
import {SuccessPage} from "../../Component/SuccessPage/SuccessPage";
import {FormControl} from "../../Component/Form/Form";

export const Order = () => {
    const {language} = useContext(LanguageContext)
    const {id} = useParams<{id: string}>()
    const {state, createOrder, initialProfile, closeSuccessPage} = useContext(OrderContext)

    useEffect(() => {
        initialProfile()
    }, [])

    const args = [state.firstName, state.lastName, state.phone, state.email, state.city, state.novaPosh, state.paymentMethod]

    if (state.success) {
        return <SuccessPage successStr={state.successStr} url={'/'} close={closeSuccessPage}/>
    }

    return <div className={o.orderBlock}>
        <FormControl
            name={language.orderL}
            btnName={language.confirmL}
            language={language}
            disabled={state.disabled}
            args={args}
            sendForm={createOrder}
            options={state.paymentMethods}
            url={id ? `/position/${id}` : '/'}
            btnNameCancel={language.cancelL}
        />
        <div className={o.orderBlockCard}>
            {id ? <OrderCard language={language} order={state.order}/> : state.orders.map(o =>  <OrderCard language={language} order={o} key={o._id}/>)}
        </div>
    </div>
}
