import React from 'react'
import m from '../Chat.module.css'

export const MessageManager = React.memo(({message}: {message: string}) => {
    return <div className={m.messageManager}>
        <div className={m.infoMessage}>
            <span>Manager:</span>
        </div>
        <div className={m.messageBody}>
            <span>{message}</span>
        </div>
    </div>
})
