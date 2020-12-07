import React, {useContext, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import p from './Positions.module.css'
import {PositionsContext} from "../../../State/PositionsState";
import {useParams} from 'react-router-dom'
import {Filter} from "../../Component/Filter/Filter";
import {LanguageContext} from "../../../State/LanguageState";


export const Positions = () => {
    const {language} = useContext(LanguageContext)
    const {positions, getPositions} = useContext(PositionsContext)
    const {id} = useParams<{id: string}>()
    useEffect(() => getPositions(id), [id])
    return <>
        <Filter/>
        {positions.map(position => <div className={p.block} key={position._id}>
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
        </div>)}
    </>
}
