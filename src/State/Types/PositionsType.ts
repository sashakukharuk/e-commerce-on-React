import {FormItem} from "../../Components/Component/Form/createObject";

type ImgSmall = {
    img: string
}

export type FilterType = {
    from: string
    to: string
    size: string
}

export type PositionsType = {
    _id: string
    imgMain: string
    imgLarge: string
    imgSmall: Array<ImgSmall>
    name: string
    price: number
    size: string
    overview: string
    categoryId: string
    quantity: number
}

export type initialPositionsType = {
    positions: PositionsType[]
    from: FormItem
    to: FormItem
    size: FormItem
    disabled: boolean
    isSize: boolean
    sizeValue: Array<{value: string }>
    openCloseSize: () => void
    getPositions: (id: string, form?: FilterType) => void
}
