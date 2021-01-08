import React, {useEffect, useReducer} from 'react'
import {chatReducer} from "./ReducerChat";
import {chatState} from "./StateChat";
import {actionChat} from "./ActionsChat";
import {InitialChatType} from "../Types/ChatType";
import {socket} from "../../Request/Request";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";


export const ChatContext = React.createContext<InitialChatType>({} as InitialChatType)

type PropsType = {
    openChat$: EventEmitter<void>
    children: any
}

export const ChatProvider = ({openChat$, children}: PropsType) => {
    const [state, dispatch] = useReducer(chatReducer, chatState)

    useEffect(() => {
        const clientId = setClientId()
        socket.addEventListener('open', () => {
            console.log('Connected to WS Server')
            socket.send(JSON.stringify({
                admin: false,
                first: true,
                senderId: state.managerId,
                recipientId: clientId,
                messages: [{senderId: state.managerId, message: 'Добрий день! Якщо виникнуть питання звертайтеся:)'}]
            }))
        })
    }, [state.clientId])

    openChat$.useSubscription(() => closeChat())

    socket.addEventListener('message', event => {
        const data = JSON.parse(event.data)
        dispatch(actionChat.setChat(data))
    })

    const setMessage = (message: string) => {
        dispatch(actionChat.setMessage(message))
    }

    const setClientId = (): string => {
        if (!state.clientId) {
            const localId = localStorage.getItem('clientId')
            if (localId) {
                dispatch(actionChat.setClientId(localId))
                return localId
            } else {
                const id = Date.now().toString()
                localStorage.setItem('clientId', id)
                dispatch(actionChat.setClientId(id))
                return id
            }
        } else {
            return state.clientId
        }
    }

    const sendMessage = () => {
        debugger
        socket.send(JSON.stringify({
            admin: false,
            first: false,
            id: state.chat._id,
            messages: [{senderId: state.clientId, message: state.message}]
        }))
        setMessage('')
    }

    const hideChat = () => {
        dispatch(actionChat.setHideChat(!state.isHide))
    }

    const closeChat = () => {
        dispatch(actionChat.setCloseChat(!state.isCLose))
        if (state.isHide) {
            hideChat()
        }
    }

    const value = {
        chat: state.chat,
        message: state.message,
        clientId: state.clientId,
        isHide: state.isHide,
        isCLose: state.isCLose,
        setMessage,
        sendMessage,
        hideChat,
        closeChat
    }

    return <ChatContext.Provider value={value}>
        {!state.isCLose && children}
    </ChatContext.Provider>
}
