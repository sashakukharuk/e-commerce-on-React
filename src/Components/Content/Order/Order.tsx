import React, {useContext, useEffect, useState} from 'react'
import {NavLink, useParams} from "react-router-dom";
import o from './Order.module.css'
import {BasketContext} from "../../../State/BasketState";
import {OrderCard} from "./OrderCard";
import {OrderContext} from "../../../State/OrderState";
import a from "../Auth/Auth.module.css";
import {InputControl} from "../../Component/Form/InputControl";
import {ValueType} from "../../Component/Form/Form";
import {valueCheck} from "../../Component/Form/valueCheck";
import {OrderFormType} from "../../../State/Types/OrderType";
import {LanguageContext} from "../../../State/LanguageState";

export const Order = () => {
    const {language} = useContext(LanguageContext)
    const {id} = useParams<{id: string}>()
    const {orders, order, clearOrders} = useContext(BasketContext)
    const {firstName, lastName, phone, email, city, novaPosh, disabled, createOrder, initialProfile} = useContext(OrderContext)
    const contextArray = [firstName, lastName, phone, email, city, novaPosh]
    const [isRequired, setIsRequired] = useState(false)
    const [form, setForm] = useState<OrderFormType>({firstName: '', lastName: '', phone: '', email: '', city: '', novaPosh: ''})
    const applyField = (value: ValueType) => {
        setForm({...form, [value.field]: value.values})
    }
    const onSubmit = () => {
        const result = valueCheck(form)
        setIsRequired(result)
        !result && confirmOrder(form)
    }
    useEffect(() => {
        setForm({...form, firstName: firstName.value, lastName: lastName.value, phone: phone.value})
    }, [firstName, lastName, phone])
    useEffect(() => {
        initialProfile()
    }, [id])
    const confirmOrder = (form: OrderFormType) => {
        const confirmOrders = id ? [order] : orders
        createOrder(form, confirmOrders)
        clearOrders()
    }
    return <div className={o.orderBlock}>
        <div className={o.orderForm}>
            <div className={o.orderContent}>
                <span className={o.orderTitle}>{language.orderL}</span>
                {contextArray.map(context => <div className={a.inputField} key={context.id}>
                    <InputControl
                        field={context}
                        isRequired={isRequired}
                        applyField={applyField}
                        validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
                </div>)}
            </div>
            <div className={o.orderAction}>
                <div className={o.orderBtnLeft}>
                    <NavLink to={id ? `/position/${id}` : '/'}><button className={o.orderBtn}>{language.cancelL}</button></NavLink>
                </div>
                <div className={o.orderBtnRight}>
                    <button className={o.orderBtn} disabled={disabled} onClick={onSubmit}>{language.confirmL}</button>
                </div>
            </div>
        </div>
        <div className={o.orderBlockCard}>
            {id ? <OrderCard order={order}/> : orders.map(o =>  <OrderCard order={o} key={o._id}/>)}
        </div>
    </div>
}
