import React, {useContext, useEffect, useState} from "react";
import {InitialHeaderType} from "./Types/HeaderType";
import {BasketContext} from "./BasketState";
import {LanguageContext} from "./LanguageState";

export const HeaderContext = React.createContext<InitialHeaderType>({} as InitialHeaderType)

export const HeaderState = (props: any) => {
    const {language} = useContext(LanguageContext)
    const {toast} = useContext(BasketContext)
    let [nowLanguage, setNewLanguage] = useState('UA')
    let [isAuth, setAuth] = useState(false)
    let [isLanguage, setLanguage] = useState(false)
    let [isModal, setModal] = useState(false)
    const languages = [{value: 'ua'}, {value: 'ru'}, {value: 'en'}]

    useEffect(() => {}, [nowLanguage, isAuth, isLanguage, isModal])

    const openMenuAuth = (): void => {
        isAuth = !isAuth
        setAuth(isAuth)
    }
    const openMenuLanguage = (): void => {
        isLanguage = !isLanguage
        setLanguage(isLanguage)
    }
    const changeLanguage = (language: string): void => {
        setNewLanguage(language)
    }
    const openModal = (): void => {
        isModal = !isModal
        setModal(isModal)
    }
    const logOut = () => {
        localStorage.removeItem('auth-token')
        toast(language.cameOutL)
    }
    return <HeaderContext.Provider value={{
        nowLanguage,
        languages,
        isAuth,
        isLanguage,
        isModal,
        openMenuAuth,
        openMenuLanguage,
        changeLanguage,
        openModal,
        logOut
    }}>
        {props.children}
    </HeaderContext.Provider>
}
