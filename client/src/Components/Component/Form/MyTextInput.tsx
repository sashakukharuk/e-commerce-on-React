import React from "react";
import {FormItem} from "./createObject";
import {FormikValues, useField} from "formik";
import {Language} from "../../../State/Types/LanguageType";
import a from "./Form.module.css";
import cn from 'classnames'
import {FieldMetaProps} from "formik/dist/types";

export type ValidateLanguageType = {
    required: string
    min: string
    max: string
}

export const onValidate = (value: FormikValues, item: FormItem, validateLanguage: ValidateLanguageType) => {
    if (!value) {
        return `${validateLanguage.required}`
    }

    if (item.min) {
        if (value.length < item.min) {
            return `${validateLanguage.min} ${item.min}`
        }
    }

    if (item.max) {
        if (value.length > item.max) {
            return `${validateLanguage.max} ${item.max}`
        }
    }

    if (item.name === 'email') {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value as unknown as string)) {
            return 'Invalid email address';
        }
    }
}

type MySelectType = {
    item: FormItem
    language: Language
    children: JSX.Element[] | undefined
}

type MyTextInputType = {
    item: FormItem
    language: Language
}

type ControlFieldType = {
    item: FormItem,
    meta: FieldMetaProps<any>,
    children: JSX.Element
}


export const MySelect = React.memo<MySelectType>(({item, language, children}) => {
    const [field, meta] = useField({name: item.name, validate: (value: FormikValues) => onValidate(value, item, {required: language.requiredL, min: language.minL, max: language.maxL})})
    return <ControlField item={item} meta={meta}>
        <select className={cn(a.field, meta.touched && meta.error && a.warningInput)} {...field}>
            {children}
        </select>
    </ControlField>
})

export const MyTextInput = React.memo(({item, language}: MyTextInputType) => {
    const [field, meta] = useField({name: item.name, validate: (value: FormikValues) => onValidate(value, item, {required: language.requiredL, min: language.minL, max: language.maxL})})
    return <ControlField item={item} meta={meta}>
        <input className={cn(a.field, meta.touched && meta.error && a.warningInput)} type={item.type} {...field}/>
    </ControlField>
})

const ControlField = React.memo<ControlFieldType>(({item, meta, children}) => {
    return <div className={a.inputField}>
        <label className={a.title} htmlFor={item.name}>{item.label}</label>
        {children}
        {meta.touched && meta.error && (<span className={a.warning}>{meta.error}</span>)}
    </div>
})
