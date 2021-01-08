export type CategoriesType = {
    _id: string
    name: {ua: string, ru: string, en: string}

}

export type ActualCategoriesType = {
    _id: string
    name: string
}

export type initialCategoriesState = {
    activeId: string
    actualCategories: ActualCategoriesType[]
    getCategories: () => void
}
