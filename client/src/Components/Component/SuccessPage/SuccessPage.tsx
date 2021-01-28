import React from 'react'
import s from './SuccessPage.module.css'
import successLogo from '../img/success.svg'
import {NavLink} from "react-router-dom";
import {SuccessStr} from "../../../State/Types/LanguageType";

type PropsType = {
    successStr: SuccessStr
    url: string
    close: () => void
}

export const SuccessPage = React.memo(({successStr, url, close}: PropsType) => {
    return <div className={s.success}>
        <h3>{successStr.h3} <img src={successLogo} alt="success"/><br/></h3><h4>{successStr.h4} <NavLink
        to={url} onClick={close}>{successStr.a}</NavLink></h4>
    </div>
})
