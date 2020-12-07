import React, {useContext, useEffect, useState} from "react";
import {requestOrder, requestProfile} from "../Request/Request";
import {useHistory} from "react-router-dom";
import {initialForm} from "../Components/Component/Form/createObject";
import {BasketContext} from "./BasketState";
import {InitialOrderType, OrderFormType} from "./Types/OrderType";
import {PositionType} from "./Types/PositionType";
import {LanguageContext} from "./LanguageState";

export const OrderContext = React.createContext<InitialOrderType>({} as InitialOrderType)

export const OrderState = (props: any) => {
    const {toast, preloader} = useContext(BasketContext)
    const history = useHistory();
    const {language} = useContext(LanguageContext)
    const initialFirstName = initialForm('firstName', 'text', 'firstName', '', language.firstNameL, true, 3, 50)
    const initialLastName = initialForm('lastName', 'text', 'lastName', '', language.lastNameL, true, 3, 50)
    const initialPhone = initialForm('phone', 'number', 'phone', '', language.phoneNumberL, true, 8, 8)
    const email = initialForm('email', 'email', 'email', '', language.emailL, true, 0, 0)
    const city = initialForm('city', 'text', 'city', '', language.cityL, true, 0, 0)
    const novaPosh = initialForm('novaPosh', 'text', 'novaPosh', '', language.deliveryPointL, true, 0, 0)

    const [firstName, setFirstName] = useState(initialFirstName)
    const [lastName, setLastName] = useState(initialLastName)
    const [phone, setPhone] = useState(initialPhone)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        setState('label', language.firstNameL, language.lastNameL, language.phoneNumberL)
    }, [language])


    const createOrder = async (form: OrderFormType, orders: PositionType[]) => {
        preloader(true)
        form.list = orders.map(o => {
            return {positionId: o._id, quantity: o.quantity};
        })
        setDisabled(true)
        await requestOrder.create(form)
            .then(() => {
                history.push('/')
                setDisabled(false)
                setDisabled(false)
                preloader(false)
            })
            .catch(error => {
                toast(error.response.data.message)
                preloader(false)
            })
    }

    const initialProfile = async () => {
        const token = localStorage.getItem('auth-token')
        token && await requestProfile.getProfile(token).then(res => {
            setState('value', res.data.firstName, res.data.lastName, res.data.phone)
        })
        .catch(error => toast(error.response.data.message))
    }

    const setState = (key: string, first: string, last: string, number: string) => {
        setFirstName({...firstName, [key]: first})
        setLastName({...lastName, [key]: last})
        setPhone({...phone, [key]: number})
    }

    return <OrderContext.Provider
        value={{firstName, lastName, phone, email, city, novaPosh, disabled, createOrder, initialProfile}}>
        {props.children}
    </OrderContext.Provider>
}




