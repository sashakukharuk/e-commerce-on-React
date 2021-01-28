import React from 'react'
import m from './Menu.module.css'
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import logoBasket from '../Component/img/shopping-cart_icon-icons.com_69303 (1).png'
import logoChat from '../Component/img/15.png'

type PropsType = {
    openModal$: EventEmitter<void>
    openChat$: EventEmitter<void>
}

export const Menu = ({openModal$, openChat$}: PropsType) => {
    return <div className={m.speedMenu}>
        <div className={m.item} onClick={() => openModal$.emit()}><img className={m.isBasket} src={logoBasket} alt=""/></div>
        <div className={m.item} onClick={() => openChat$.emit()}><img className={m.isChat} src={logoChat} alt=""/></div>
    </div>
}
