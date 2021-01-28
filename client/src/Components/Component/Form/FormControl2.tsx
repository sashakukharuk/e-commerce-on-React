import React, {useEffect, useState} from 'react'
import a from './Form.module.css'
import {InputControl} from "./InputControl";
import {Button} from "../Button/Button";
import {FormItem} from "./createObject";
import {Language} from "../../../State/Types/LanguageType";
import {valueCheck} from "./valueCheck";

export type ValueType = {
    values: string
    field: string
}

type PropsType = {
    name: string
    btnName?: string
    language: Language
    args: FormItem[]
    disabled: boolean
    callBack: (form: any) => void
}

export const FormControl2 = React.memo(({name, btnName, language, args, disabled, callBack}: PropsType) => {
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
        <div className={a.authAction}>
            <Button disabled={disabled} name={btnName ? btnName : 'button'} onSubmit={() => onSubmit()}/>
        </div>
    </>
})
