import React from "react";
import o from "./Order.module.css";
import {PositionType} from "../../../State/Types/PositionType";
import {Language} from "../../../State/Types/LanguageType";

type PropsType = {
    language: Language
    order: PositionType
}

export const OrderCard: React.FC<PropsType> = React.memo(({language, order}) => {
    return <div className={o.orderCard} >
        <div className={o.orderCardFlex}>
            <div className={o.orderPhoto}>
                <img src={`/${order.imgMain}`} alt="ff"/>
            </div>
            <div className={o.orderBody}>
                <h4>{order.name}</h4>
                <h4>{language.sizeL}:<strong>{order.size}</strong></h4>
                <h4>{language.quantityL}:<strong>{order.quantity}</strong></h4>
                <h4>{language.priceL}:<strong>{order.price} {language.currencyL}</strong></h4>
            </div>
        </div>
    </div>
})
