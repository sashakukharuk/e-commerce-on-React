type Languages = {
    value: string
}
export type InitialHeaderType = {
    nowLanguage: string
    languages: Languages[]
    isLanguage: boolean
    isAuth: boolean
    isModal: boolean
    openMenuAuth: () => void
    openMenuLanguage: () => void
    changeLanguage: (language: string) => void
    openModal: () => void
    logOut: () => void
}
