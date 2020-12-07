import React, {useEffect, useState} from "react";
const initialState = {
    nowLanguage: 'EN',
    languages: [{value: 'UA'}, {value: 'RU'}, {value: 'EN'}],
    isLanguage: false,
    isAuth: false,
    isModal: false,
    openMenuAuth: ()=>{},
    openMenuLanguage: ()=>{},
    changeLanguage: (language: string)=>{},
    openModal: (T: boolean)=>{}
}
export type HeaderType = typeof initialState
export const HeaderContext = React.createContext(initialState)

export const HeaderState = (props: any) => {
    let [nowLanguage, setNewLanguage] = useState('UA')
    let [isAuth, setAuth] = useState(false)
    let [isLanguage, setLanguage] = useState(false)
    let [isModal, setModal] = useState(false)

    useEffect(() => {}, [nowLanguage, isAuth, isLanguage])

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
    const openModal = (T: boolean): void => {
        setModal(T)
    }
    return <HeaderContext.Provider value={{nowLanguage,  languages: [{value: 'UA'}, {value: 'RU'}, {value: 'EN'}], isAuth, isLanguage, isModal, openMenuAuth, openMenuLanguage, changeLanguage, openModal}}>
        {props.children}
    </HeaderContext.Provider>
}
