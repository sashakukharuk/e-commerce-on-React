import React, {useContext} from 'react'
import m from './Message.module.css'
import {MessageContext} from "../../../State/Message/MessageProvider";

export const Message = () => {
    const {message, hidden} = useContext(MessageContext)
    return <div className={m.message} hidden={!hidden}>
        <h4>{message}</h4>
    </div>
}
