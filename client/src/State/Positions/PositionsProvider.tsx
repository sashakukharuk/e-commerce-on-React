import React, {useContext, useEffect, useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {FilterType, initialPositionsType} from "../Types/PositionsType";
import {LanguageContext} from "../Language/LanguageProvider";
import {requestPositions} from "../../Request/Request";
import {positionsReducer} from "./ReducerPositions";
import {positionsState} from "./StatePositions";
import {actionPositions} from "./ActionsPositions";

export const PositionsContext = React.createContext<initialPositionsType>({} as initialPositionsType)

type PropsType = {
    toast$:  EventEmitter<string>
    preloader$:  EventEmitter<boolean>
    children: any
}

export const PositionsProvider = ({toast$, preloader$, children}: PropsType) => {

    const [state, dispatch] = useReducer(positionsReducer, positionsState)

    const {language} = useContext(LanguageContext)

    useEffect(() => {
        dispatch(actionPositions.setLabel('from', language.fromL))
        dispatch(actionPositions.setLabel('to', language.toL))
        dispatch(actionPositions.setLabel('size', language.sizeL))
    }, [language])

    const getPositions = async (id: string, filter: FilterType | undefined): Promise<void> => {
        dispatch(actionPositions.setDisabled(true))
        preloader$.emit(true)
        await requestPositions.getPositions(id, filter?.from || '', filter?.to || '', filter?.size || '')
            .then(res => {
                dispatch(actionPositions.setPositions(res.data))
                dispatch(actionPositions.setDisabled(false))
                preloader$.emit(false)
            })
            .catch(error => {
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const value = {
        positions: state.positions,
        from: state.from,
        to: state.to,
        size: state.size,
        disabled: state.disabled,
        sizeValue: state.sizeValue,
        getPositions
    }

    return <PositionsContext.Provider value={value}>
        {children}
    </PositionsContext.Provider>
}
