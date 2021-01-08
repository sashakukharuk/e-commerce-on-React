import React, {useContext} from 'react'
import {LanguageContext} from "../../../../State/Language/LanguageProvider";
import {AuthContext} from "../../../../State/Auth/AuthProvider";
import {FormControl} from "../../../Component/Form/FormControl";
import a from "../Auth.module.css";

export const Login = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, disabled, loginIn} = useContext(AuthContext)

    return <div className={a.authBlock}>
        <div className={a.auth}>
            <FormControl
                name={language.logInL}
                btnName={language.logInL}
                language={language}
                args={[email, password]}
                disabled={disabled}
                callBack={(form) => loginIn(form)}
            />
        </div>
    </div>
}
