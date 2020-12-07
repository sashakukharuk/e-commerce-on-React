import React, {useContext, useState} from 'react'
import f from './Filter.module.css'
import {PositionsContext} from "../../../State/PositionsState";
import {FilterType, initialPositionsState} from "../../../State/Types/PositionsType";
import {useParams} from "react-router-dom";
import {ValueType} from "../Form/Form";
import {LanguageContext} from "../../../State/LanguageState";
import {InputControl} from "../Form/InputControl";

export const Filter = () => {
    const {id} = useParams<{id: string}>()
    const {language} = useContext(LanguageContext)
    const {from, to, size, disabled, isSize, sizeValue, openCloseSize, getPositions} = useContext<initialPositionsState>(PositionsContext)
    const [filter, setForm] = useState<FilterType>({from: '', to: '', size: ''})

    const applyField = (value: ValueType) => {
        setForm({...filter, [value.field]: value.values})
    }
    const onSubmit = (filter: FilterType) => {
        getPositions(id, filter)
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
                <input id={size.id} type={size.type} name={size.name} value={filter.size} onChange={(e)=>{
                    applyField({values: e.target.value, field: 'size'})
                }} onClick={openCloseSize}/>
                {isSize && <div className={f.menu}>
                    <ul>
                        {sizeValue.map(size => <li key={size.value} onClick={() => {
                            applyField({values: size.value, field: 'size'})
                            openCloseSize()
                        }}>{size.value}</li>)}
                    </ul>
                </div>}
            </div>
        </div>
        <div className={f.filter}>
            <button disabled={disabled} onClick={() => onSubmit(filter)}>{language.applyL}</button>
        </div>
    </div>
}
