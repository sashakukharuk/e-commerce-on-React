import React, {useContext} from 'react'
import {LanguageContext} from "../../../../State/Language/LanguageProvider";
import {AuthContext} from "../../../../State/Auth/AuthProvider";
import {FormControl} from "../../../Component/Form/Form";

export const Login = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, disabled, loginIn} = useContext(AuthContext)

    return <div style={{paddingTop: '100px'}}>
        <FormControl
            name={language.logInL}
            btnName={language.logInL}
            language={language}
            args={[email, password]}
            disabled={disabled}
            sendForm={loginIn}
        />
    </div>
}
