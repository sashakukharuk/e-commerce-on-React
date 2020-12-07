import React, {useContext} from 'react'
import m from './Modal.module.css'
import {BasketContext} from "../../../State/BasketState";
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../../State/LanguageState";

type ModalType = {
    closeModal: () => void
}
export const Modal: React.FC<ModalType> = ({closeModal}) => {
    const {language} = useContext(LanguageContext)
    const {orders, removeOrder, compute} = useContext(BasketContext)
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
                <button className={m.btnLeft} onClick={closeModal}>{language.cancelL}</button>
                <NavLink to={`/order`}><button disabled={orders.length === 0} className={m.btnRight} onClick={closeModal}>{language.confirmL}</button></NavLink>
            </div>
        </div>
    </div>
}
