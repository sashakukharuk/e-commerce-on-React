import {OrderStateType} from "../Order/StateOrder";

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
    list?: Array<List>
}

export type InitialOrderType = {
    state: OrderStateType
    createOrder: (form: OrderFormType) => void
    initialProfile: () => void
    closeSuccessPage: () => void
}
