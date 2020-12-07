import React, {useContext, useState} from "react";
import {BasketContext} from "./BasketState";
import {requestPosition} from "../Request/Request";
import {InitialPositionType, PositionType} from "./Types/PositionType";

export const PositionContext = React.createContext<InitialPositionType>({} as InitialPositionType)

export const PositionState = (props: any) => {

    let [position, setPosition] = useState<PositionType>({} as PositionType)

    let {toast, preloader} = useContext(BasketContext)

    const getPosition = async (id: string): Promise<void> => {
        preloader(true)
        await requestPosition.getPosition(id)
            .then(res =>  {
                setPosition(res.data)
                preloader(false)
            })
            .catch(error => {
                toast(error.response.data.message)
                preloader(false)
            })
    }

    return <PositionContext.Provider value={{position, getPosition}}>
        {props.children}
    </PositionContext.Provider>
}
