import React, {useContext, useEffect, useReducer} from "react";
import {useHistory} from "react-router-dom";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {authState} from "./StateAuth";
import {preloaderAuth} from "./ReducerAuth";
import {AuthType, InitialAuthType, Profile} from "../Types/AuthType";
import {LanguageContext} from "../Language/LanguageProvider";
import {requestAuth, requestProfile} from "../../Request/Request";
import {actionAuth} from "./ActionsAuth";

export const AuthContext = React.createContext<InitialAuthType>({} as InitialAuthType)

type PropsType = {
    toast$: EventEmitter<string>
    preloader$: EventEmitter<boolean>
    children: any
}

export const AuthProvider = ({toast$, preloader$, children}: PropsType) => {

    const [state, dispatch] = useReducer(preloaderAuth, authState)

    const {language} = useContext(LanguageContext)
    const history = useHistory()

    useEffect(() => {
        dispatch(actionAuth.setLabel('email', language.emailL))
        dispatch(actionAuth.setLabel('password', language.passwordL))
        dispatch(actionAuth.setLabel('firstName', language.firstNameL))
        dispatch(actionAuth.setLabel('lastName', language.lastNameL))
        dispatch(actionAuth.setLabel('phone', language.phoneNumberL))
        dispatch(actionAuth.setSuccessStr(language.successStrAuth))
    }, [language, dispatch])

    const loginIn = async (form: AuthType) => {
        preloader$.emit(true)
        dispatch(actionAuth.setDisabled(true))
        await requestAuth.postLogin(form)
            .then(res => {
                localStorage.setItem('auth-token', res.token)
                history.push('/')
                dispatch(actionAuth.setDisabled(false))
                preloader$.emit(false)
            }).catch(error => {
                dispatch(actionAuth.setDisabled(false))
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const register = async (form: Profile) => {
        preloader$.emit(true)
        dispatch(actionAuth.setDisabled(true))
        await requestAuth.postRegister(form)
            .then(res => {
                requestProfile.create(form, res._id as string)
                    .then(() => {
                        dispatch(actionAuth.setSuccess(true))
                        dispatch(actionAuth.setDisabled(false))
                        preloader$.emit(false)
                    })
                    .catch(error => {
                        dispatch(actionAuth.setDisabled(false))
                        toast$.emit(error.response.data.message)
                        preloader$.emit(false)
                    })
            }).catch(error => {
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const closeSuccessPage = () => {
        dispatch(actionAuth.setSuccess(false))
    }

    const value = {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        successStr: state.successStr,
        disabled: state.disabled,
        success: state.success,
        loginIn,
        register,
        closeSuccessPage
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
