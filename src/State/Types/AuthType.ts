import {FormItem} from "../../Components/Component/Form/createObject";

export type Profile = {
    email: string
    password: string
    firstName: string;
    lastName: string;
    phone: string;
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

export type InitialAuthType = {
    email: FormItem
    password: FormItem
    firstName: FormItem
    lastName: FormItem
    phone: FormItem
    disabled: boolean
    loginIn: (form: AuthType) => void
    register: (form: Profile) => void
}
