import {PositionType} from "../Types/PositionType";
import {SuccessStr} from "../Types/LanguageType";

export const orderState = {
    firstName: {id: 'firstName', type: 'text', name: 'firstName', value: '', label: 'Ім`я', require: true, min: 3, max: 50, autoComplete: 'on'},
    lastName: {id: 'lastName', type: 'text', name: 'lastName', value: '', label: 'Прізвище', require: true, min: 3, max: 50, autoComplete: 'on'},
    phone: {id: 'phone', type: 'number', name: 'phone', value: '', label: 'Номер телефона', require: true, min: 8, max: 8, autoComplete: 'on'},
    email: {id: 'email', type: 'email', name: 'email', value: '', label: 'email', require: true, min: 0, max: 0, autoComplete: 'on'},
    city: {id: 'city', type: 'text', name: 'city', value: '', label: 'Місто', require: true, min: 0, max: 0, autoComplete: 'on'},
    novaPosh: {id: 'novaPosh', type: 'text', name: 'novaPosh', value: '', label: 'Нова пошта', require: true, min: 0, max: 0, autoComplete: 'on'},
    paymentMethod: {id: 'paymentMethod', type: 'select', name: 'paymentMethod', value: '', label: 'Спосіб оплати', require: true, min: 0, max: 0, autoComplete: 'off'},
    paymentMethods: [{value: 'Наложений платіж'}, {value: 'Банківська картка'}],
    successStr: {} as SuccessStr,
    disabled: false,
    success: false,
    order: {} as PositionType,
    orders: [] as PositionType[]
}
export type OrderStateType = typeof orderState
