import React, {useContext} from 'react'
import m from './Message.module.css'
import {BasketContext} from "../../../State/BasketState";

export const Message = () => {
    let {message, hidden} = useContext(BasketContext)
    return <div className={m.message} hidden={!hidden}>
        <h4>{message}</h4>
    </div>
}
