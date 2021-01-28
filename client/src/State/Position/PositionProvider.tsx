import React, {useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {InitialPositionType} from "../Types/PositionType";
import {positionReducer} from "./ReducerPosition";
import {positionState} from "./StatePosition";
import {requestPosition} from "../../Request/Request";
import {actionPosition} from "./ActionsPosition";

export const PositionContext = React.createContext<InitialPositionType>({} as InitialPositionType)

type PropsType = {
    toast$:  EventEmitter<string>
    preloader$:  EventEmitter<boolean>
    children: any
}

export const PositionProvider = ({toast$, preloader$, children}: PropsType) => {

    const [state, dispatch] = useReducer(positionReducer, positionState)

    const getPosition = async (id: string): Promise<void> => {
        preloader$.emit(true)
        await requestPosition.getPosition(id)
            .then(res =>  {
                dispatch(actionPosition.setPosition(res.data))
                preloader$.emit(false)
            })
            .catch(error => {
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const value = {
        position: state.position,
        getPosition
    }

    return <PositionContext.Provider value={value}>
        {children}
    </PositionContext.Provider>
}
