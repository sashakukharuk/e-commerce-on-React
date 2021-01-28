import React, {useContext, useEffect, useState} from 'react'
import p from './Position.module.css'
import {NavLink, useParams} from "react-router-dom";
import {Button} from "../../../Component/Button/Button";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {PositionType} from "../../../../State/Types/PositionType";
import {LanguageContext} from "../../../../State/Language/LanguageProvider";
import {PositionContext} from "../../../../State/Position/PositionProvider";
import logoBack from '../../../Component/img/arrows+back+chevron+direction+left+icon-1320085937350640908_512.png'

type PropsType = {
    addPositionBasket$:  EventEmitter<{position: PositionType, quantity: number}>
    addPositionOrder$:  EventEmitter<{position: PositionType, quantity: number}>
}

export const Position = ({addPositionBasket$, addPositionOrder$}: PropsType) => {
    const {id} = useParams<{id: string}>()
    const {language} = useContext(LanguageContext)
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
            <NavLink to={`/positions/${position.categoryId}`}><img src={logoBack} alt={'<'}/></NavLink>
        </div>
        <div className={p.photo}>
            <div className={p.photoLarge}><img src={`/${imgLarge}`} alt="hh"/></div>
            {imagesSmall && imagesSmall.map(img => <div
                key={img._id}
                className={p.photoSmall}>
                <img src={`/${img.img}`} alt="hh" onClick={() => changeImageLarge(img.img)}/>
            </div>)}
        </div>
        <div className={p.info}>
            <div className={p.infoTitle}><h4>{position.name}</h4></div>
            <div className={p.infoPrice}><h4>{language.priceL}:<strong>{position.price} {language.currencyL}</strong></h4></div>
            <div className={p.infoSize}><h4 className={p.sizeTitle}>{language.sizeL}:<strong>{position.size}</strong></h4></div>
            <div className={p.infoQuantity}>
                <label htmlFor='quantity'>
                    <h4>{language.quantityL}:</h4>
                </label>
                <input id='quantity' type="number" value={quantity} min="1" max="10" onChange={changeQuantity}/>
            </div>
            <div className={p.infoButtons}>
                <Button disabled={false} name={language.inBasketL} onSubmit={() => addPositionBasket$.emit({
                    position,
                    quantity
                })}/>
                <NavLink to={`/order/${position._id}`}>
                    <Button disabled={false} name={language.buyL} onSubmit={() => addPositionOrder$.emit({
                        position,
                        quantity
                    })}/>
                </NavLink>
            </div>
            <div className={p.infoDescription}><p>{position.overview}</p></div>
        </div>
    </div>
}
