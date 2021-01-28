import {InferActionsTypes} from "../Types/InferActionsType";
import {ActualCategoriesType, CategoriesType} from "../Types/CategoriesType";

export const CATEGORIES_SET_CATEGORIES = 'CATEGORIES_SET_CATEGORIES'
export const CATEGORIES_SET_ACTUAL_CATEGORIES = 'CATEGORIES_SET_ACTUAL_CATEGORIES'
export const CATEGORIES_SET_ID = 'CATEGORIES_SET_ID'

export const actionCategories = {
    setCategories: (categories: CategoriesType[]) => ({type: CATEGORIES_SET_CATEGORIES, categories} as const),
    setActualCategories: (actualCategories: ActualCategoriesType[]) => ({type: CATEGORIES_SET_ACTUAL_CATEGORIES, actualCategories} as const),
    setId: (id: string) => ({type: CATEGORIES_SET_ID, id} as const)
}

export type ActionCategoriesType = InferActionsTypes<typeof actionCategories>
