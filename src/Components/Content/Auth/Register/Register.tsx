import React, {useContext} from 'react'
import {LanguageContext} from "../../../../State/Language/LanguageProvider";
import {AuthContext} from "../../../../State/Auth/AuthProvider";
import {FormControl} from "../../../Component/Form/FormControl";
import a from "../Auth.module.css";
import {SuccessPage} from "../../../Component/SuccessPage/SuccessPage";

export const Register = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, firstName, lastName, phone, successStr, disabled, success, register, closeSuccessPage} = useContext(AuthContext)

    if (success) {
        return <SuccessPage successStr={successStr} url={'/login'} close={closeSuccessPage}/>
    }

    return <div className={a.authBlock}>
        <div className={a.auth}>
            <FormControl
                name={language.registerTitleL}
                btnName={language.registerBtnL}
                language={language}
                args={[email, password, firstName, lastName, phone]}
                disabled={disabled}
                callBack={(form) => register(form)}
            />
        </div>
    </div>
}
