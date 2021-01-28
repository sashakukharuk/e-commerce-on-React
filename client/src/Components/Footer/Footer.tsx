import React, {useContext} from 'react'
import f from './Footer.module.css'
import {LanguageContext} from "../../State/Language/LanguageProvider";
import {FooterContext} from "../../State/Footer/FooterProvider";

export const Footer = () => {
    const {language} = useContext(LanguageContext)
    const {contacts} = useContext(FooterContext)
    return <div className={f.footer}>
        <div className={f.contact}>
            <h5>{language.contactsL}:<br/>{language.phoneL} {contacts.phone}<br/>{language.emailL}: <a href="#"> {contacts.email}</a></h5>
        </div>
        <div className={f.contact}>
            <div className={f.telegram}><img src="" alt=""/></div>
            <div className={f.telegram}><img src="" alt=""/></div>
        </div>
    </div>
}
