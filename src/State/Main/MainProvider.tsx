import React, {useReducer} from 'react'
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {mainReducer} from "./ReducerMain";
import {mainState} from "./StateMain";
import {actionMain} from "./ActionsMain";
import {requestMain} from "../../Request/Request";
import {InitialMainType} from "../Types/MainType";


export const MainContext = React.createContext<InitialMainType>({} as InitialMainType)

type PropsType = {
    preloader$:  EventEmitter<boolean>
    children: any
}

export const MainProvider = ({preloader$, children}: PropsType) => {
    const [state, dispatch] = useReducer(mainReducer, mainState)

    const getPopular = () => {
        preloader$.emit(true)
        requestMain.getPopular().then(res => {
            dispatch(actionMain.setPopular(res.data))
            preloader$.emit(false)
        })
    }

    const value = {
        popular: state.popular,
        getPopular
    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>
}
