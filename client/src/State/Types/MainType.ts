
export type Popular = {
    _id: string
    image: string
}

export type InitialMainType = {
    popular: Popular[]
    getPopular: () => void
}
