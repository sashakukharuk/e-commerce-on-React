import React, {useEffect, useState} from "react";
import f from './Form.module.css'
import {FormItem} from "./createObject";
import {ValueType} from "./Form";

type PropsType = {
    field: FormItem
    disabled: boolean
    applyField: (value: ValueType) => void
}

export const FormControl2: React.FC<PropsType> = ({field, disabled, applyField}) => {
    const [item, setItem] = useState(field)
    const [validate, setValidate] = useState( '')
    useEffect(() => {
        if (disabled) {
            onValidate(String(item.value))
        }
    }, [disabled])
    const onValidate = (values: string) => {
        applyField({values: values, field: item})
        setValidate('')
        if (item.require) {
            if (!values) {
                return setValidate( 'Required')
            }
            if (item.min !== 0) {
                if (values.length < item.min) {
                    setValidate(`Must be ${item.min} characters or less`)
                } else {
                    setValidate('')
                }
            }
            if (item.min !== 0) {
                if (values.length > item.max) {
                    setValidate(`Must be ${item.max} characters or less`);
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
                onValidate(event.target.value)
            }}
            onBlur={(event) => onValidate(event.target.value)}
            value={item.value}
        />
        {validate ? <span className={f.warning}>{validate}</span> : null}
    </React.Fragment>
}
