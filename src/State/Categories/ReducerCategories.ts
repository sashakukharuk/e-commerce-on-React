import {CategoriesStateType} from "./StateCategories";
import {
    ActionCategoriesType,
    CATEGORIES_SET_ACTUAL_CATEGORIES,
    CATEGORIES_SET_CATEGORIES,
    CATEGORIES_SET_ID
} from "./ActionsCategories";

export const categoriesReducer = (state: CategoriesStateType, action: ActionCategoriesType) => {
    switch (action.type) {
        case CATEGORIES_SET_CATEGORIES: {
            return {...state, categories: action.categories}
        }
        case CATEGORIES_SET_ACTUAL_CATEGORIES: {
            return {...state, actualCategories: action.actualCategories}
        }
        case CATEGORIES_SET_ID: {
            return {...state, activeId: action.id}
        }

        default: return state
    }
}
