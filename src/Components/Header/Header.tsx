import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import h from './Header.module.css'
import {HeaderContext} from '../../State/HeaderState'
import {Modal} from "../Component/Modal/Modal";
import {LanguageContext} from "../../State/LanguageState";

export const Header = () => {
    const {language, applyLanguage} = useContext(LanguageContext)
    const {
        nowLanguage,
        languages,
        isAuth,
        isLanguage,
        isModal,
        openMenuAuth,
        openMenuLanguage,
        changeLanguage,
        openModal,
        logOut
    } = useContext(HeaderContext)
    return <>
        <div className={h.header}>
            <div className={h.headerRight}>
                <div className={h.login}>
                    <h4 onClick={openMenuAuth}>{language.logInL}</h4>
                    {isAuth && <div className={h.header__menu}>
                        <ul>
                            <NavLink to='/login'>
                                <li onClick={openMenuAuth}>{language.logInL}</li>
                            </NavLink>
                            <NavLink to='/register'>
                                <li onClick={openMenuAuth}>{language.registerL}</li>
                            </NavLink>
                            <li onClick={() => {openMenuAuth(); logOut()}}>{language.logOutL}</li>
                        </ul>
                    </div>}
                </div>
                <div className={h.basket} onClick={() => openModal()}><img src="" alt={language.basketL}/></div>
                <div className={h.language}>
                    <h4 onClick={openMenuLanguage}>{nowLanguage}</h4>
                    {isLanguage && <div className={h.header__menu}>
                        <ul>
                            {languages.map(l => <li key={l.value} onClick={() => {
                                applyLanguage(l.value)
                                changeLanguage(l.value)
                                openMenuLanguage()
                            }}>{l.value}</li>)}
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
        {isModal && <Modal closeModal={openModal}/>}
    </>

}
