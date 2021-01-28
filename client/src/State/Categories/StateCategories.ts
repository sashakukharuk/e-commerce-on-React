import {ActualCategoriesType, CategoriesType} from "../Types/CategoriesType";

export const categoriesState = {
    categories: [] as CategoriesType[],
    actualCategories: [] as ActualCategoriesType[],
    activeId: ''
}
export type CategoriesStateType = typeof categoriesState
