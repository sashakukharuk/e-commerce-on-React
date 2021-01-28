import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useEventEmitter} from "@umijs/hooks";
import {Filter} from "../../Component/Filter/Filter";
import {Card} from "./Card";
import {FilterType} from "../../../State/Types/PositionsType";
import {LanguageContext} from "../../../State/Language/LanguageProvider";
import {PositionsContext} from "../../../State/Positions/PositionsProvider";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

type PropsType = {
    activeLi$: EventEmitter<string>
}

export const Positions = React.memo(({activeLi$}: PropsType) => {
    const getPositions$ = useEventEmitter<{form: FilterType}>()
    const {language} = useContext(LanguageContext)
    const {positions, from, to, size, disabled, sizeValue, getPositions} = useContext(PositionsContext)
    const {id} = useParams<{id: string}>()
    useEffect(() => {
        activeLi$.emit(id)
        getPositions(id)
    }, [id])
    getPositions$.useSubscription((val) => getPositions(id, val.form))
    return <>
        <Filter
            language={language}
            from={from}
            to={to}
            size={size}
            disabled={disabled}
            sizeValue={sizeValue}
            getPositions$={getPositions$}
        />
        {positions.map(position => <Card key={position._id} position={position} language={language}/>)}
    </>
})
