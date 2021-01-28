import React, {useReducer} from 'react'
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {InitialMessageType} from "../Types/MessageType";
import {messageReducer} from "./ReducerMessage";
import {messageState} from "./StateMessage";
import {actionMessage} from "./ActionsMessage";


export const MessageContext = React.createContext<InitialMessageType>({} as InitialMessageType)

type PropsType = {
    toast$:  EventEmitter<string>
    children: any
}

export const MessageProvider = ({toast$, children}: PropsType) => {

    const [state, dispatch] = useReducer(messageReducer, messageState)

    toast$.useSubscription((message) => toast(message))

    const toast = (message: string): void => {
        if (message) {
            dispatch(actionMessage.setMessage(message))
            dispatch(actionMessage.setHidden(true))
            new Promise((resolve) => {
                const timeout: any = setTimeout(() => {
                    dispatch(actionMessage.setHidden(false))
                    resolve(timeout);
                }, 3000);
            }).then((timeout: any) => clearTimeout(timeout))
        }
    }

    return <MessageContext.Provider value={state}>
        {children}
    </MessageContext.Provider>
}
