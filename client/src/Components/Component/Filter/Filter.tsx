import React from 'react'
import f from './Filter.module.css'
import {FilterType} from "../../../State/Types/PositionsType";
import {Button} from "../Button/Button";
import {FormItem} from "../Form/createObject";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {Language} from "../../../State/Types/LanguageType";
import {Field, Form, Formik, useField} from "formik";

type PropsType = {
    language: Language
    from: FormItem
    to: FormItem
    size: FormItem
    disabled: boolean
    sizeValue: Array<{ value: string }>
    getPositions$: EventEmitter<{ form: FilterType }>
}

// @ts-ignore
const MySelect = (props) => {
    const [field] = useField(props);
    return <select {...field} {...props} />
};

export const Filter = React.memo(({language, from, to, size, disabled, sizeValue, getPositions$}: PropsType) => {

    const onSubmit = (form: FilterType) => {
        getPositions$.emit({form})
    }

    return <Formik
        initialValues={{from: '', to: '', size: ''}}
        onSubmit={onSubmit}
    >
        {() => (
            <Form>
                <div className={f.filterBlock}>
                    <div className={f.filter}>
                        <div className={f.blockField}>
                            <h4>{language.priceL}</h4>
                            <label htmlFor={from.name} className={f.title}>{from.label}</label>
                            <Field className={f.field} type={from.type} name={from.name} min={0} autoComplete={from.autoComplete}/>
                            <label htmlFor={to.name} className={f.title}>{to.label}</label>
                            <Field className={f.field} type={to.type} name={to.name} min={0} autoComplete={to.autoComplete}/>
                        </div>
                    </div>
                    <div className={f.filter}>
                        <div className={f.blockField}>
                            <h4>{language.sizeL}</h4>
                            <MySelect className={f.field} name={size.name}>
                                {sizeValue.map((size, idx) => <option key={idx} value={size.value}>{size.value}</option>)}
                            </MySelect>
                        </div>
                    </div>
                    <div className={f.filter}>
                        <Button disabled={disabled} name={language.applyL}/>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
})
