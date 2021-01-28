import {InferActionsTypes} from "../Types/InferActionsType";
import {ContactsType} from "../Types/FooterType";

export const FOOTER_SET_CONTACTS = 'FOOTER_SET_CONTACTS'

export const actionFooter = {
    setContacts: (contacts: ContactsType) => ({type: FOOTER_SET_CONTACTS, contacts} as const)
}

export type ActionFooterType = InferActionsTypes<typeof actionFooter>
