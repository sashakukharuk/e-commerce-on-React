import React, {useEffect, useState} from 'react'
import a from './Form.module.css'
import {ValueType} from "./Form";
import {InputControl} from "./InputControl";
import {Button} from "../Button/Button";
import {FormItem} from "./createObject";
import {Language} from "../../../State/Types/LanguageType";
import {valueCheck} from "./valueCheck";
import {NavLink} from "react-router-dom";

type PropsType = {
    order?: boolean
    id?: string
    name: string
    btnName?: string
    language: Language
    args: FormItem[]
    disabled: boolean
    callBack: (form: any) => void
}

export const FormControl = React.memo(({order, id, name, btnName, language, args, disabled, callBack}: PropsType) => {
    const [isRequired, setIsRequired] = useState(false)

    useEffect(() => setIsRequired(false), [args])

    const form = args.reduce((acm, item) => {
        // @ts-ignore
        acm[item.name] = ''
        return acm
    }, {})

    // @ts-ignore
    const applyField = (value: ValueType) => form[value.field] = value.values

    const onSubmit = () => {
        const result = valueCheck(form)
        setIsRequired(result)
        !result && callBack(form)
    }

    return <>
        <div className={a.authContent}>
            <span className={a.authTitle}>{name}</span>
            {args.map(arg => <div className={a.inputField} key={arg.id}>
                <InputControl
                    field={arg}
                    isRequired={isRequired}
                    applyField={applyField}
                    validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
            </div>)}
        </div>
        {!order
            ? <div className={a.authAction}>
                <Button disabled={disabled} name={btnName ? btnName : 'button'} onSubmit={() => onSubmit()}/>
            </div>
            : <div className={a.orderAction}>
                <div className={a.orderBtnLeft}>
                    <NavLink to={id ? `/position/${id}` : '/'}>
                        <Button disabled={false} name={language.cancelL} onSubmit={() => {}}/>
                    </NavLink>
                </div>
                <div className={a.orderBtnRight}>
                    <Button disabled={disabled} name={language.confirmL} onSubmit={() => onSubmit()}/>
                </div>
            </div>
        }
    </>
})
