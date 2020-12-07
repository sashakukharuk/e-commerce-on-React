import React, {useContext, useEffect, useState} from 'react'
import a from '../Auth.module.css'
import {AuthContext} from "../../../../State/AuthState";
import {InputControl} from "../../../Component/Form/InputControl";
import {Profile} from "../../../../State/Types/AuthType";
import {ValueType} from "../../../Component/Form/Form";
import {valueCheck} from "../../../Component/Form/valueCheck";
import {LanguageContext} from "../../../../State/LanguageState";
export const Register = () => {
    const {language} = useContext(LanguageContext)
    const {email, password, firstName, lastName, phone, disabled, register} = useContext(AuthContext)
    const contextAuthArray = [email, password]
    const contextProfileArray = [firstName, lastName, phone]
    const [repetition, setRepetition] = useState('')
    const [validate, setValidate] = useState(false)
    const [isRequired, setIsRequired] = useState(false)
    const [form, setForm] = useState<Profile>({email: '', password: '', firstName: '', lastName: '', phone: ''})

    const applyField = (value: ValueType) => {
        setForm({...form, [value.field]: value.values})
    }
    const onSubmit = (form: Profile) => {
        const result = valueCheck(form)
        setIsRequired(result)
        if (!result) {
            const isRepetition = validatePassword(repetition)
            !isRepetition && register(form)
        }
    }
    useEffect(() => {
        repetition &&  validatePassword(repetition)
    }, [form.password])
    const changePassword = (e: any) => {
        const another = e.target.value
        setRepetition(another)
        validatePassword(another)
    }
    const validatePassword = (another: string): boolean => {
        const result: boolean = another !== form.password
        setValidate(result)
        return result
    }
    return <div className={a.authBlock}>
        <div className={a.auth}>
            <div className={a.authContent}>
                <span className={a.authTitle}>{language.registerTitleL}</span>
                {contextAuthArray.map(context => <div className={a.inputField} key={context.id}>
                    <InputControl
                        field={context}
                        isRequired={isRequired}
                        applyField={applyField}
                        validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
                </div>)}
                <h4>{language.repetitionPasswordL}</h4>
                <div className={a.inputField}>
                    <label>
                        <input
                            className={validate ? a.warningInput : ''}
                            type="password" value={repetition}
                            onChange={(e) => changePassword(e)}
                        />
                    </label>
                    {validate && <span className={a.warning}>{language.repetitionPasswordL}</span>}
                </div>
                <span className={a.authTitle}>{language.personalL}</span>
                {contextProfileArray.map(context => <div className={a.inputField} key={context.id}>
                    <InputControl
                        field={context}
                        isRequired={isRequired}
                        applyField={applyField}
                        validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
                </div>)}
            </div>
            <div className={a.authAction}>
                <button className={a.btn} disabled={validate || disabled} onClick={() => onSubmit(form)}>{language.registerBtnL}</button>
            </div>
        </div>
    </div>
}
