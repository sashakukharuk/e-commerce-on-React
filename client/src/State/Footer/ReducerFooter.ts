import {FooterStateType} from "./StateFooter";
import {ActionFooterType, FOOTER_SET_CONTACTS} from "./ActionsFooter";

export const footerReducer = (state: FooterStateType, action: ActionFooterType) => {
    switch (action.type) {
        case FOOTER_SET_CONTACTS: {
            return {...state, contacts: action.contacts}
        }

        default: return state
    }
}
