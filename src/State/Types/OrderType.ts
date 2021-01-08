import {FormItem} from "../../Components/Component/Form/createObject";
import {PositionType} from "./PositionType";
import {SuccessStr} from "./LanguageType";

export type OrderType = {
    _id: string;
    image: string;
    name: string;
    price: number;
    size: string;
    quantity: number;
}

export type List = {
    positionId: string;
    quantity: number;
}

export type OrderFormType = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    novaPosh: string;
    list?: Array<List>;
}

export type InitialOrderType = {
    order: PositionType
    orders: PositionType[]
    firstName: FormItem
    lastName: FormItem
    phone: FormItem
    email: FormItem
    city: FormItem
    novaPosh: FormItem
    successStr: SuccessStr
    disabled: boolean
    success: boolean
    createOrder: (form: OrderFormType, orders: PositionType[]) => void
    initialProfile: () => void
    closeSuccessPage: () => void
}
