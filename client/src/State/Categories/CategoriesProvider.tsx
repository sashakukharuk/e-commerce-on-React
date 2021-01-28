import React, {useContext, useEffect, useMemo, useReducer} from "react";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {categoriesReducer} from "./ReducerCategories";
import {categoriesState} from "./StateCategories";
import {ActualCategoriesType, initialCategoriesState} from "../Types/CategoriesType";
import {LanguageContext} from "../Language/LanguageProvider";
import {requestCategories} from "../../Request/Request";
import {actionCategories} from "./ActionsCategories";

export const CategoriesContext = React.createContext<initialCategoriesState>({} as initialCategoriesState)

type PropsType = {
    toast$:  EventEmitter<string>
    preloader$:  EventEmitter<boolean>
    activeLi$: EventEmitter<string>
    children: any
}

export const CategoriesProvider = ({toast$, preloader$, activeLi$, children}: PropsType) => {

    const [state, dispatch] = useReducer(categoriesReducer, categoriesState)

    const {key} = useContext(LanguageContext)

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        changeCategoriesLanguage()
    }, [key, state.categories])

    activeLi$.useSubscription((id: string) => dispatch(actionCategories.setId(id)))

    const changeCategoriesLanguage = () => {
        const result = state.categories.map(category => {
            let object = Object.entries(category.name)
            for (let [name, value] of object) {
                if (name === key) {
                    return {
                        _id: category._id, name: value
                    }
                }
            }
        })
        dispatch(actionCategories.setActualCategories(result as ActualCategoriesType[]))
    }

    const getCategories = () => {
        preloader$.emit(true)
        requestCategories.getCategories()
            .then(res => {
                dispatch(actionCategories.setCategories(res.data))
                preloader$.emit(false)
            })
            .catch(error => {
                toast$.emit(error.response.data.message)
                preloader$.emit(false)
            })
    }

    const value = useMemo(() => {
        return {
            activeId: state.activeId,
            actualCategories: state.actualCategories
        }
    }, [state.activeId, state.actualCategories])

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}
