import React, {useEffect, useState} from "react";
import f from './Form.module.css'
import {FormItem} from "./createObject";
import {ValueType} from "./Form";

type PropsType = {
    field: FormItem
    isRequired: boolean
    applyField: (value: ValueType) => void
    validateLanguage: {
        required: string
        min: string
        max: string
    }
}

export const InputControl: React.FC<PropsType> = React.memo(({field, isRequired, applyField, validateLanguage}) => {
    const [item, setItem] = useState(field)
    const [validate, setValidate] = useState( '')

    useEffect(() => {
        isRequired && onValidate(String(item.value))
    }, [isRequired])

    useEffect(() => {
        isRequired && onValidate(String(item.value))
        setValidate('')
        setItem(field)
    }, [field])

    const onValidate = (values: string) => {
        setValidate('')
        if (item.require) {
            if (!values) {
                return setValidate( validateLanguage.required)
            }
            if (item.min !== 0) {
                if (values.length < item.min) {
                    setValidate(`${validateLanguage.min} ${item.min}`)
                } else {
                    setValidate('')
                }
            }
            if (item.min !== 0) {
                if (values.length > item.max) {
                    setValidate(`${validateLanguage.max} ${item.max}`);
                }
            }
        }
    }

    return <React.Fragment>
        {item.label && <label htmlFor={item.name} className={f.title}>{item.label}</label>}
        <input className={validate && f.warningInput}
            id={item.id}
            name={item.name}
            type={item.type}
            onChange={(event) => {
                setItem({...item, value: event.target.value})
                applyField({values: event.target.value, field: item.name})
                onValidate(event.target.value)
            }}
            onBlur={(event) => onValidate(event.target.value)}
            value={item.value}
            autoComplete="off"
        />
        {validate ? <span className={f.warning}>{validate}</span> : null}
    </React.Fragment>
})
