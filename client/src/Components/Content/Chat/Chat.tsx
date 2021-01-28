import React, {useContext} from 'react'
import c from './Chat.module.css'
import {ChatContext} from "../../../State/Chat/ChatProvider";
import {FieldMessage} from "./Message/FieldMessage";
import logoHide from '../../Component/img/minimize+minus+remove+sign+icon-1320085940403912850_0.svg'
import logoClose from '../../Component/img/close.png'
import logoSend from '../../Component/img/message-icon.png'

export const Chat = () => {
    const {chat, message, clientId, isHide, setMessage, sendMessage, hideChat, closeChat} = useContext(ChatContext)

    return <div className={c.chat}>
        <div className={c.chatHeader}>
            <div className={c.hide} onClick={hideChat}><img src={logoHide} alt="-"/></div>
            <div className={c.close} onClick={closeChat}><img src={logoClose} alt="+"/></div>
        </div>
        {!isHide && <>
            <div className={c.fieldMessage}>
                <FieldMessage chat={chat} clientId={clientId}/>
            </div>
            <div className={c.formChat}>
                <div className={c.fieldInput}>
                    <label>
                        <textarea value={message} onChange={(event) => setMessage(event.target.value)}/>
                    </label>
                </div>
                <div className={c.btnSend}>
                    <img onClick={() => message && sendMessage()} src={logoSend} alt="send"/>
                </div>
            </div>
        </>}
    </div>
}
