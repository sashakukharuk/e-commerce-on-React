import React, {useContext} from 'react'
import {LanguageContext} from "../../../../State/Language/LanguageProvider";
import {AuthContext} from "../../../../State/Auth/AuthProvider";
import {SuccessPage} from "../../../Component/SuccessPage/SuccessPage";
import {FormControl} from "../../../Component/Form/Form";

export const Register = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, firstName, lastName, phone, successStr, disabled, success, register, closeSuccessPage} = useContext(AuthContext)

    if (success) {
        return <SuccessPage successStr={successStr} url={'/login'} close={closeSuccessPage}/>
    }

    return <div style={{paddingTop: '100px'}}>
        <FormControl
            name={language.registerTitleL}
            btnName={language.registerBtnL}
            language={language}
            args={[email, password, firstName, lastName, phone]}
            disabled={disabled}
            sendForm={register}
        />
    </div>
}
