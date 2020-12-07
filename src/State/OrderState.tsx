import React, {useEffect, useState} from "react";
import {requestAuth, requestProfile} from "../Request/Request";
import { useHistory } from "react-router-dom";
import {FormItem, initialForm} from "../Components/Component/Form/createObject";

export type Profile = {
    firstName: string;
    lastName: string;
    phone: number;
    userId?: string;
}

export type AuthType = {
    _id?: string;
    email: string
    password: string
}

export type TokenType  = {
    token: string
}

export type ValueType = {
    values: string
    name: string
}

export type InitialAuthType = {
    email: FormItem
    password: FormItem
    firstName: FormItem
    lastName: FormItem
    phone: FormItem
    applyField: (value: ValueType) => void
    loginIn: () => void
    register: () => void
}

export const AuthContext = React.createContext<InitialAuthType>({} as InitialAuthType)

export const AuthState = (props: any) => {
    const initialEmail = initialForm('email', 'email', 'email',  '',  'Email', true, 0, 0)
    const initialPassword = initialForm('password', 'password', 'password',  '',  'Password', true, 3, 30)
    const initialFirstName = initialForm('firstName', 'text', 'firstName',  '',  'First name', true, 3, 50)
    const initialLastName = initialForm('lastName', 'text', 'lastName',  '',  'Last name', true, 3, 50)
    const initialPhone = initialForm('phone', 'number', 'phone', '',  'Phone number', true, 8, 8)

    let [email, setEmail] = useState(initialEmail)
    let [password, setPassword] = useState(initialPassword)
    let [firstName, setFirstName] = useState(initialFirstName)
    let [lastName, setLastName] = useState(initialLastName)
    let [phone, setPhone] = useState(initialPhone)

    useEffect(() => {
    }, [email, password])

    const history = useHistory();

    const applyField = (value: ValueType) => {
        switch (value.name) {
            case 'email': {
                const newEmail = {...email, value: value.values}
                return setEmail(newEmail)
            }
            case 'password': {
                const newPassword = {...password, value: value.values}
                return setPassword(newPassword)
            }
            case 'firstName': {
                const newFirstName = {...firstName, value: value.values}
                return setFirstName(newFirstName)
            }
            case 'lastName': {
                const newLastName = {...lastName, value: value.values}
                return setLastName(newLastName)
            }
            case 'phone': {
                const newPhone = {...phone, value: value.values}
                return setPhone(newPhone)
            }
        }
    }

    const loginIn = async () => {
        const auth = {email: email.value, password: password.value}
        await requestAuth.postLogin(auth).then(res => {
            localStorage.setItem('auth-token', res.token)
            history.push('/')
        })
    }
    const register = async () => {
        const auth = {email: email.value, password: password.value}
        const profile: Profile = {firstName: firstName.value, lastName: lastName.value, phone: Number(phone.value)}
        await requestAuth.postRegister(auth).then(res => {
            requestProfile.create(profile, res._id as string).then(res => res)
        })
    }

    return <AuthContext.Provider value={{email, password, firstName, lastName, phone, applyField, loginIn, register}}>
        {props.children}
    </AuthContext.Provider>
}
