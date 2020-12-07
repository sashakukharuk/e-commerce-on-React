import React, {useContext} from 'react'
import f from './Footer.module.css'
import {LanguageContext} from "../../State/LanguageState";

export const Footer = () => {
    const {language} = useContext(LanguageContext)
    return <div className={f.footer}>
        <div className={f.contact}>
            <h5>{language.contactsL}: <br/> {language.phoneL} +00 (000) 000 00 00 <a href="#"> @gmail.com </a></h5>
        </div>
        <div className={f.contact}>
            <div className={f.telegram}><img src="" alt=""/></div>
            <div className={f.telegram}><img src="" alt=""/></div>
        </div>
    </div>
}
