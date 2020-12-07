import React, {useContext, useEffect, useState} from 'react'
import p from './Position.module.css'
import {NavLink, useParams} from "react-router-dom";
import {PositionContext} from '../../../../State/PositionState';
import {BasketContext} from "../../../../State/BasketState";
import {LanguageContext} from "../../../../State/LanguageState";

export const Position = () => {
    console.log('Render Position')
    const {id} = useParams<{id: string}>()
    const {language} = useContext(LanguageContext)
    const {addOrder, addOneOrder} = useContext(BasketContext)
    const {position, getPosition} = useContext(PositionContext)
    const [imgLarge, setImgLarge] = useState(position.imgLarge)
    const [imagesSmall, setImagesSmall] = useState(position.imgSmall)
    const [quantity, setQuantity] = useState<number>(1)
    useEffect(() => {
        getPosition(id)
    }, [id])

    useEffect(() => {
        setImgLarge(position.imgLarge)
        setImagesSmall(position.imgSmall)
    }, [position])

    const changeImageLarge = (img: string) => {
        setImgLarge(img)
    }

    const changeQuantity = (event: any) => {
        const value = Number(event.target.value[0])
        setQuantity(value)
    }
    return <div className={p.overviewCard}>
        <div className={p.lastPage}>
            <NavLink to={`/positions/${position.categoryId}`}><span>{'<'}</span></NavLink>
        </div>
        <div className={p.photo}>
            <div className={p.photoLarge}><img src={`http://localhost:5000/${imgLarge}`} alt="hh"/></div>
            {imagesSmall && imagesSmall.map(img => <div
                key={img._id}
                className={p.photoSmall}>
                <img src={`http://localhost:5000/${img.img}`} alt="hh" onClick={() => changeImageLarge(img.img)}/>
            </div>)}
        </div>
        <div className={p.info}>
            <div className={p.infoTitle}><h4>{position.name}</h4></div>
            <div className={p.infoPrice}><h4>{language.priceL}:<strong>{position.price} {language.currencyL}</strong></h4></div>
            <div className={p.infoSize}><h4>{language.sizeL}:<strong>{position.size}</strong></h4></div>
            <div className={p.infoQuantity}>
                <label>
                    <input type="number" value={quantity} min="1" max="10" onChange={changeQuantity}/>
                </label>
            </div>
            <div className={p.infoButtons}>
                <button onClick={() => addOrder && addOrder(position, quantity)}>{language.inBasketL}</button>
                <NavLink to={`/order/${position._id}`}><button onClick={() => addOneOrder && addOneOrder(position, quantity)}>{language.buyL}</button></NavLink>
            </div>
            <div className={p.infoDescription}><p>{position.overview}</p></div>
        </div>
    </div>
}
