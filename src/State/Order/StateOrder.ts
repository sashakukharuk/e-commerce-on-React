import {PositionType} from "../Types/PositionType";
import {SuccessStr} from "../Types/LanguageType";

export const orderState = {
    firstName: {id: 'firstName', type: 'text', name: 'firstName', value: '', label: 'Ім`я', require: true, min: 3, max: 50},
    lastName: {id: 'lastName', type: 'text', name: 'lastName', value: '', label: 'Прізвище', require: true, min: 3, max: 50},
    phone: {id: 'phone', type: 'number', name: 'phone', value: '', label: 'Номер телефона', require: true, min: 8, max: 8},
    email: {id: 'email', type: 'email', name: 'email', value: '', label: 'email', require: true, min: 0, max: 0},
    city: {id: 'city', type: 'text', name: 'city', value: '', label: 'Місто', require: true, min: 0, max: 0},
    novaPosh: {id: 'novaPosh', type: 'text', name: 'novaPosh', value: '', label: 'Нова пошта', require: true, min: 0, max: 0},
    successStr: {} as SuccessStr,
    disabled: false,
    success: false,
    order: {} as PositionType,
    orders: [] as PositionType[]
}
export type OrderStateType = typeof orderState
