import React, {useContext} from 'react'
import m from './Modal.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "../Button/Button";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {PositionType} from "../../../State/Types/PositionType";
import {LanguageContext} from "../../../State/Language/LanguageProvider";
import {BasketContext} from "../../../State/Basket/BasketProvider";

type PropsType = {
    activeLi$: EventEmitter<string>
    addOrders$: EventEmitter<{ orders: PositionType[] }>
}

export const Modal = ({activeLi$, addOrders$}: PropsType) => {
    const {language} = useContext(LanguageContext)
    const {orders, removeOrder, compute, openModal} = useContext(BasketContext)
    return <div className={m.modalOverlay}>
        <div className={m.modalWindow}>
            <div className={m.modalContent}>
                <h4>{language.goodsL}</h4>
                <table className={m.table}>
                    <thead>
                    <tr>
                        <th>{language.nameL}</th>
                        <th>{language.quantityL}</th>
                        <th>{language.priceL}</th>
                        <th/>
                    </tr>
                    </thead>
                    {orders && orders.map((item)=> <tbody key={item._id}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price} $.</td>
                        <td>
                            <button className={m.deleteBtn}
                                onClick = {() => removeOrder && removeOrder(item._id)}>{language.deleteL}
                            </button>
                        </td>
                    </tr>
                    </tbody>)}
                </table>
                <div className={m.orderSummary}>
                    <p>{language.totalPriceL} <strong>{compute && compute()}</strong></p>
                </div>
            </div>
            <div className={m.modalFooter}>
                <Button disabled={false} name={language.cancelL} onSubmit={openModal}/>
                <NavLink to={`/order`}>
                    <Button disabled={orders.length === 0} name={language.confirmL} onSubmit={() => {
                        addOrders$.emit({orders})
                        activeLi$.emit('')
                        openModal()
                    }}/>
                </NavLink>
            </div>
        </div>
    </div>
}
