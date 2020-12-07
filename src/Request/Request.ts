import axios from 'axios'
import {AuthType, Profile, TokenType} from "../State/Types/AuthType";
import {OrderFormType} from "../State/Types/OrderType";
import {CategoriesType} from "../State/Types/CategoriesType";
import {PositionType} from "../State/Types/PositionType";
import {PositionsType} from "../State/Types/PositionsType";
import {LanguageType} from "../State/Types/LanguageType";


const instance = axios.create({
    baseURL: 'http://localhost:5000/api/'
})

export const requestLanguage = {
    getLanguage (name: string) {
        return instance.get<LanguageType>(`/language/${name}`)
    },
}

export const requestAuth = {
    postLogin (auth: AuthType) {
        return instance.post<TokenType>('auth/login', auth).then(res => res.data)
    },

    postRegister (auth: AuthType) {
        return instance.post<AuthType>('auth/register', auth).then(res => res.data)
    }
}

export const requestProfile = {
    getProfile (token: string) {
        return instance.get<Profile>('profile', {
            headers: {
                Authorization: token
            }
        })
    },

    create (profile: Profile, id: string) {
        profile.userId = id
        return instance.post<Profile>('profile', profile).then(res => res.data)
    }
}

export const requestOrder = {
    create (order: OrderFormType) {
        return instance.post<OrderFormType>('order', order)
    }
}

export const requestCategories = {
    getCategories () {
        return instance.get<CategoriesType[]>('categories')
    }
}

export const requestPositions = {
    getPositions (id?: string, from?: string, to?: string, size?: string) {
        return instance.get<PositionsType[]>(`categories/${id}?from=${from}&to=${to}&size=${size}`)
    }
}

export const requestPosition = {
    getPosition (id: string) {
        return instance.get<PositionType>(`position/${id}`)
    }
}
