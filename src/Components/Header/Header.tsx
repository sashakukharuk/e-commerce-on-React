import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import h from './Header.module.css'
import {List} from "../Component/List/List";
import {EventEmitter} from '@umijs/hooks/lib/useEventEmitter'
import {LanguageContext} from "../../State/Language/LanguageProvider";
import {HeaderContext} from "../../State/Header/HeaderProvider";

type PropsType = {
    activeLi$: EventEmitter<string>
    openModal$: EventEmitter<void>
}

export const Header = ({activeLi$, openModal$}: PropsType) => {
    const {language, applyLanguage} = useContext(LanguageContext)
    const {
        nowLanguage,
        languages,
        isAuth,
        isLanguage,
        openMenuAuth,
        openMenuLanguage,
        changeLanguage,
        logOut
    } = useContext(HeaderContext)

    return <>
        <div className={h.header}>
            <div className={h.headerLeft}>
                <NavLink to='/'><h4>Shop</h4></NavLink>
            </div>
            <div className={h.headerRight}>
                <div className={h.login}>
                    <h4 onClick={openMenuAuth}>{language.logInL}</h4>
                    {isAuth && <div className={h.header__menu}>
                        <ul>
                            <NavLink to='/login'>
                                <li onClick={() => {
                                    activeLi$.emit('')
                                }}>
                                    {language.logInL}
                                </li>
                            </NavLink>
                            <NavLink to='/register'>
                                <li onClick={() => {
                                    activeLi$.emit('')
                                }}>
                                    {language.registerL}
                                </li>
                            </NavLink>
                            <li onClick={() => {
                                activeLi$.emit('')
                                logOut()}
                            }>
                                {language.logOutL}
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className={h.basket} onClick={() => openModal$.emit()}><h4>{language.basketL}</h4></div>
                <div className={h.language}>
                    <h4 onClick={openMenuLanguage}>{nowLanguage}</h4>
                    {isLanguage && <List arrValue={languages} applyField={(value) => {
                        applyLanguage(value)
                        changeLanguage(value)
                    }}/>}
                </div>
            </div>
        </div>
    </>
}
