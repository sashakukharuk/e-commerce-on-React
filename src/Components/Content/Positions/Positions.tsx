import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useEventEmitter} from "@umijs/hooks";
import {Filter} from "../../Component/Filter/Filter";
import {Card} from "./Card";
import {FilterType} from "../../../State/Types/PositionsType";
import {LanguageContext} from "../../../State/Language/LanguageProvider";
import {PositionsContext} from "../../../State/Positions/PositionsProvider";

export const Positions = () => {
    const openCloseSize$ = useEventEmitter<void>()
    const getPositions$ = useEventEmitter<{ id: string, form?: FilterType }>()
    const {language} = useContext(LanguageContext)
    const {positions, from, to, size, disabled, isSize, sizeValue, openCloseSize, getPositions} = useContext(PositionsContext)
    const {id} = useParams<{id: string}>()
    useEffect(() => getPositions(id), [id])
    openCloseSize$.useSubscription(() => openCloseSize())
    getPositions$.useSubscription((val) => getPositions(val.id, val.form))
    return <>
        <Filter
            id={id}
            language={language}
            from={from}
            to={to}
            size={size}
            disabled={disabled}
            isSize={isSize}
            sizeValue={sizeValue}
            openCloseSize$={openCloseSize$}
            getPositions$={getPositions$}
        />
        {positions.map(position => <Card key={position._id} position={position} language={language}/>)}
    </>
}
