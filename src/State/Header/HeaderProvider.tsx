import React, {useContext, useEffect, useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {InitialHeaderType} from "../Types/HeaderType";
import {LanguageContext} from "../Language/LanguageProvider";
import {headerReducer} from "./ReducerHeader";
import {headerState} from "./StateHeader";
import {actionHeader} from "./ActionsHeader";

export const HeaderContext = React.createContext<InitialHeaderType>({} as InitialHeaderType)

type PropsType = {
    toast$:  EventEmitter<string>
    children: any
}

export const HeaderProvider = ({toast$, children}: PropsType) => {

    const [state, dispatch] = useReducer(headerReducer, headerState)

    const {language} = useContext(LanguageContext)

    useEffect(() => {
        state.isAuth && document.addEventListener('click', openMenuAuth)
        state.isLanguage && document.addEventListener('click', openMenuLanguage)
        return () => {
            document.removeEventListener('click', openMenuAuth)
            document.removeEventListener('click', openMenuLanguage)
        }
    }, [state.isAuth, state.isLanguage])

    const openMenuAuth = (): void => {
        dispatch(actionHeader.setAuth(!state.isAuth))
    }
    const openMenuLanguage = (): void => {
        dispatch(actionHeader.setLanguage(!state.isLanguage))
    }
    const changeLanguage = (language: string): void => {
        dispatch(actionHeader.setNewLanguage(language))
    }
    const logOut = () => {
        localStorage.removeItem('auth-token')
        toast$.emit(language.cameOutL)
    }

    const value = {
        nowLanguage: state.nowLanguage,
        languages: state.languages,
        isAuth: state.isAuth,
        isLanguage: state.isLanguage,
        openMenuAuth,
        openMenuLanguage,
        changeLanguage,
        logOut
    }

    return <HeaderContext.Provider value={value}>
        {children}
    </HeaderContext.Provider>
}
