import React, {useEffect, useMemo, useReducer} from 'react'
import {footerReducer} from "./ReducerFooter";
import {footerState} from "./StateFooter";
import {actionFooter} from "./ActionsFooter";
import {requestFooter} from "../../Request/Request";
import {InitialFooterType} from "../Types/FooterType";

export const FooterContext = React.createContext<InitialFooterType>({} as InitialFooterType)

type PropsType = {
    children: any
}

export const FooterProvider = ({children}: PropsType) => {
    const [state, dispatch] = useReducer(footerReducer, footerState)

    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = () => {
        requestFooter.getContacts().then(res => dispatch(actionFooter.setContacts(res)))
    }

    const value = useMemo(() => {
        return {
            contacts: state.contacts
        }
    }, [state.contacts])

    return <FooterContext.Provider value={value}>
        {children}
    </FooterContext.Provider>
}
