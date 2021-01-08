import React, {useReducer} from 'react'
import {requestLanguage} from "../../Request/Request";
import {languageReducer} from "./ReducerLanguage";
import {languageState} from "./StateLanguage";
import {actionLanguage} from "./ActionsLanguage";
import {InitialLanguageType} from "../Types/LanguageType";

export const LanguageContext = React.createContext<InitialLanguageType>({} as InitialLanguageType)


export const LanguageProvider = (props: any) => {

    const [state, dispatch] = useReducer(languageReducer, languageState)

    const applyLanguage = async (name: string) => {
        dispatch(actionLanguage.setKey(name))
        const data = await requestLanguage.getLanguage(name).then(res => res.data)
        dispatch(actionLanguage.setLanguage(data.language))
    }

    const value = {
        language: state.language,
        key: state.key,
        applyLanguage
    }

    return <LanguageContext.Provider value={value}>
        {props.children}
    </LanguageContext.Provider>
}
