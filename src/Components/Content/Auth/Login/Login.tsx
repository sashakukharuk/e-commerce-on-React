import React, {useContext, useState} from 'react'
import a from '../Auth.module.css'
import {AuthContext} from "../../../../State/AuthState";
import {InputControl} from "../../../Component/Form/InputControl";
import {ValueType} from "../../../Component/Form/Form";
import {valueCheck} from "../../../Component/Form/valueCheck";
import {AuthType} from "../../../../State/Types/AuthType";
import {LanguageContext} from "../../../../State/LanguageState";

export const Login = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, disabled, loginIn} = useContext(AuthContext)
    const contextArray = [email, password]
    let [isRequired, setIsRequired] = useState(false)
    let [form, setForm] = useState<AuthType>({email: '', password: ''})

    const applyField = (value: ValueType) => {
        setForm({...form, [value.field]: value.values})
    }
    const onSubmit = (form: AuthType) => {
        const result = valueCheck(form)
        setIsRequired(result)
        !result && loginIn(form)
    }
    return <div className={a.authBlock}>
        <div className={a.auth}>
            <div className={a.authContent}>
                <span className={a.authTitle}>{language.logInL}</span>
                {contextArray.map(context => <div className={a.inputField} key={context.id}>
                    <InputControl
                        field={context}
                        isRequired={isRequired}
                        applyField={applyField}
                        validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
                </div>)}
            </div>
            <div className={a.authAction}>
                <button className={a.btn} disabled={disabled} onClick={() => onSubmit(form)}>{language.logInL}</button>
            </div>
        </div>
    </div>
}
