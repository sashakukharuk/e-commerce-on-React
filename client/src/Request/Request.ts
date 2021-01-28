import axios from 'axios'
import {AuthType, Profile, TokenType} from "../State/Types/AuthType";
import {OrderFormType} from "../State/Types/OrderType";
import {CategoriesType} from "../State/Types/CategoriesType";
import {PositionType} from "../State/Types/PositionType";
import {PositionsType} from "../State/Types/PositionsType";
import {LanguageType} from "../State/Types/LanguageType";
import {Popular} from "../State/Types/MainType";
import {ContactsType} from "../State/Types/FooterType";

export const instance = axios.create({
    baseURL: '/'
})

export const socket = new WebSocket('ws://localhost:5000')

export const requestFooter = {
    getContacts () {
        return instance.get<ContactsType>(`api/contacts`).then(res => res.data)
    },
}

export const requestMain = {
    getPopular () {
        return instance.get<Popular[]>(`api/popular`)
    },
}

export const requestLanguage = {
    getLanguage (name: string) {
        return instance.get<LanguageType>(`api/language/${name}`)
    },
}

export const requestAuth = {
    postLogin (auth: AuthType) {
        return instance.post<TokenType>('api/auth/login', auth).then(res => res.data)
    },

    postRegister (auth: AuthType) {
        return instance.post<AuthType>('api/auth/register', auth).then(res => res.data)
    }
}

export const requestProfile = {
    getProfile (token: string) {
        return instance.get<Profile>('api/profile', {
            headers: {
                Authorization: token
            }
        })
    },

    create (profile: Profile, id: string) {
        profile.userId = id
        return instance.post<Profile>('api/profile', profile).then(res => res.data)
    }
}

export const requestOrder = {
    create (order: OrderFormType) {
        return instance.post<OrderFormType>('api/order', order)
    }
}

export const requestCategories = {
    getCategories () {
        return instance.get<CategoriesType[]>('api/categories')
    }
}

export const requestPositions = {
    getPositions (id?: string, from?: string, to?: string, size?: string) {
        return instance.get<PositionsType[]>(`api/categories/${id}?from=${from}&to=${to}&size=${size}`)
    }
}

export const requestPosition = {
    getPosition (id: string) {
        return instance.get<PositionType>(`api/position/${id}`)
    }
}
