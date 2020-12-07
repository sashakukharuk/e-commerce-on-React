import {FormItem} from "../../Components/Component/Form/createObject";

export type Profile = {
    firstName: string;
    lastName: string;
    phone: number;
    userId?: string;
}

export type AuthType = {
    _id?: string;
    email: string
    password: string
}

export type TokenType = {
    token: string
}

export type ValueType = {
    values: string
    name: string
}

export type InitialAuthType = {
    email: FormItem
    password: FormItem
    firstName: FormItem
    lastName: FormItem
    phone: FormItem
    applyField: (value: ValueType) => void
    loginIn: () => void
    register: () => void
}
