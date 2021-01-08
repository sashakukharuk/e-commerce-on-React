import {SuccessStr} from "../Types/LanguageType";

export const authState = {
    email: {id: 'email', type: 'email', name: 'email', value: '', label: 'Email', require: true, min: 0, max: 0},
    password: {id: 'password', type: 'password', name: 'password', value: '', label: 'Пароль', require: true, min: 3, max: 30},
    firstName: {id: 'firstName', type: 'text', name: 'firstName', value: '', label: 'Ім`я', require: true, min: 3, max: 50},
    lastName: {id: 'lastName', type: 'text', name: 'lastName', value: '', label: 'Прізвище', require: true, min: 3, max: 50},
    phone: {id: 'phone', type: 'number', name: 'phone', value: '', label: 'Номер телефона', require: true, min: 8, max: 8},
    successStr: {} as SuccessStr,
    disabled: false,
    success: false,
}
export type AuthStateType = typeof authState
