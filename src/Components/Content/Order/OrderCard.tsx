import React, {useContext} from "react";
import o from "./Order.module.css";
import {PositionType} from "../../../State/Types/PositionType";
import {LanguageContext} from "../../../State/LanguageState";

type PropsType = {
    order: PositionType
}

export const OrderCard: React.FC<PropsType> = ({order}) => {
    const {language} = useContext(LanguageContext)
    return <div className={o.orderCard} >
        <div className={o.orderCardFlex}>
            <div className={o.orderPhoto}>
                <img src="" alt="ff"/>
            </div>
            <div className={o.orderBody}>
                <h4>{order.name}</h4>
                <h4>{language.sizeL}:<strong>{order.size}</strong></h4>
                <h4>{language.quantityL}:<strong>{order.quantity}</strong></h4>
                <h4>{language.priceL}:<strong>{order.price} грн.</strong></h4>
            </div>
        </div>
    </div>
}
