import React from 'react'
import m from '../Chat.module.css'

export const MessageClient = React.memo(({message}: {message: string}) => {
    return <div className={m.messageClient}>
        <div className={m.messageBody}>
            <span>{message}</span>
        </div>
    </div>
})
