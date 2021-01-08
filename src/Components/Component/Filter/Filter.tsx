import React, {useState} from 'react'
import f from './Filter.module.css'
import {FilterType} from "../../../State/Types/PositionsType";
import {ValueType} from "../Form/Form";
import {InputControl} from "../Form/InputControl";
import {Button} from "../Button/Button";
import {List} from "../List/List";
import {FormItem} from "../Form/createObject";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {Language} from "../../../State/Types/LanguageType";

type PropsType = {
    id: string
    language: Language
    from: FormItem
    to: FormItem
    size: FormItem
    disabled: boolean
    isSize: boolean
    sizeValue: Array<{value: string }>
    openCloseSize$: EventEmitter<void>
    getPositions$: EventEmitter<{ id: string, form?: FilterType }>
}

export const Filter = React.memo(({id, language, from, to, size, disabled, isSize, sizeValue, openCloseSize$, getPositions$}: PropsType) => {

    const [filter, setForm] = useState<FilterType>({from: '', to: '', size: ''})

    const applyField = (value: ValueType) => {
        setForm({...filter, [value.field]: value.values})
    }
    const onSubmit = (form: FilterType) => {
        getPositions$.emit({id, form})
    }

    return <div className={f.filterBlock}>
        <div className={f.filter}>
            <div className={f.price}>
                <h4>{language.priceL}</h4>
                <InputControl
                    field={from}
                    isRequired={false}
                    applyField={applyField}
                    validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
                <InputControl
                    field={to}
                    isRequired={false}
                    applyField={applyField}
                    validateLanguage={{required: language.requiredL, min: language.minL, max: language.maxL}}/>
            </div>
        </div>
        <div className={f.filter}>
            <div className={f.size}>
                <h4>{language.sizeL}</h4>
                <input id={size.id} type={size.type} name={size.name} value={filter.size} autoComplete="off" onChange={(e)=>{
                    applyField({values: e.target.value, field: 'size'})
                }} onClick={() => openCloseSize$.emit()}/>
                {isSize && <List arrValue={sizeValue} applyField={(value) => {
                    applyField({values: value, field: 'size'})
                }} />}
            </div>
        </div>
        <div className={f.filter}>
            <Button disabled={disabled} name={language.applyL} onSubmit={() => onSubmit(filter)}/>
        </div>
    </div>
})
