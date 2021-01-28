type Languages = {
    value: string
}
export type InitialHeaderType = {
    nowLanguage: string
    languages: Languages[]
    isLanguage: boolean
    isAuth: boolean
    openMenuAuth: () => void
    openMenuLanguage: () => void
    changeLanguage: (language: string) => void
}
