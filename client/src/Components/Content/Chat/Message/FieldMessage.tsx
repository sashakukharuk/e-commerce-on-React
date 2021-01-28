import React from 'react'
import {ChatType} from "../../../../State/Types/ChatType";
import {MessageClient} from "./MessageClient";
import {MessageManager} from "./MessageManager";

type PropsType = {
    chat: ChatType
    clientId: string
}

export const FieldMessage = React.memo(({chat, clientId}: PropsType) => {
    return <>
        {chat.messages && chat.messages.map(item => {
            if (item.senderId === clientId) {
               return <MessageClient key={item._id} message={item.message}/>
            } else {
                return <MessageManager key={item._id} message={item.message}/>
            }
        })}
    </>
})
