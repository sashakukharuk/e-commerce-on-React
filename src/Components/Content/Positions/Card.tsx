import React from 'react'
import {NavLink} from 'react-router-dom'
import p from './Positions.module.css'
import {PositionsType} from "../../../State/Types/PositionsType";
import {Language} from "../../../State/Types/LanguageType";

type PositionsOneType = {
    position: PositionsType
    language: Language
}

export const Card = React.memo(({position, language}: PositionsOneType) => {
    return <div className={p.block} key={position._id}>
        <div className={p.card}>
            <div className={p.cardPhoto}>
                <NavLink to={`/position/${position._id}`}><img src={`http://localhost:5000/${position.imgMain}`} alt="hh"/></NavLink>
            </div>
            <div className={p.cardTitle}>
                <h4>{position.name}</h4>
            </div>
            <div className={p.cardPrice}>
                <h4>{language.priceL}:<strong>{position.price} {language.currencyL}</strong></h4>
            </div>
            <div className={p.cardSize}>
                <h4>{language.sizeL}:<strong>{position.size}</strong></h4>
            </div>
        </div>
    </div>
})
