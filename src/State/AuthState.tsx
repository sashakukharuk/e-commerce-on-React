import React, {useContext, useState} from "react";
import {requestAuth, requestProfile} from "../Request/Request";
import {useHistory} from "react-router-dom";
import {initialForm} from "../Components/Component/Form/createObject";
import {BasketContext} from "./BasketState";
import {AuthType, InitialAuthType, Profile} from "./Types/AuthType";
import {LanguageContext} from "./LanguageState";

export const AuthContext = React.createContext<InitialAuthType>({} as InitialAuthType)

export const AuthState = (props: any) => {
    const {language} = useContext(LanguageContext)
    const [disabled, setDisabled] = useState(false)
    const {toast, preloader} = useContext(BasketContext)
    const history = useHistory()

    const email = initialForm('email', 'email', 'email', '', language.emailL, true, 0, 0)
    const password = initialForm('password', 'password', 'password', '', language.passwordL, true, 3, 30)
    const firstName = initialForm('firstName', 'text', 'firstName', '', language.firstNameL, true, 3, 50)
    const lastName = initialForm('lastName', 'text', 'lastName', '', language.lastNameL, true, 3, 50)
    const phone = initialForm('phone', 'number', 'phone', '', language.phoneNumberL, true, 8, 8)

    const loginIn = async (form: AuthType) => {
        preloader(true)
        setDisabled(true)
        await requestAuth.postLogin(form)
            .then(res => {
                localStorage.setItem('auth-token', res.token)
                history.push('/')
                setDisabled(false)
                preloader(false)
            }).catch(error => {
                setDisabled(false)
                toast(error.response.data.message)
                preloader(false)
            })
    }

    const register = async (form: Profile) => {
        preloader(true)
        setDisabled(true)
        await requestAuth.postRegister(form)
            .then(res => {
                requestProfile.create(form, res._id as string)
                    .then(() => {
                        setDisabled(false)
                        history.push('/login')
                        preloader(false)
                    })
                    .catch(error => {
                        setDisabled(false)
                        toast(error.response.data.message)
                        preloader(false)
                    })
            }).catch(error => {
                toast(error.response.data.message)
                preloader(false)
            })
    }

    return <AuthContext.Provider
        value={{email, password, firstName, lastName, phone, disabled, loginIn, register}}>
        {props.children}
    </AuthContext.Provider>
}
