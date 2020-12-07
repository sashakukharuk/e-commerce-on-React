import React, {useContext, useEffect, useState} from "react";
import {requestCategories} from "../Request/Request";
import {BasketContext} from "./BasketState";
import {ActualCategoriesType, CategoriesType, initialCategoriesState} from "./Types/CategoriesType";
import {LanguageContext} from "./LanguageState";

export const CategoriesContext = React.createContext<initialCategoriesState>({} as initialCategoriesState)

export const CategoriesState = (props: any) => {
    const {toast, preloader} = useContext(BasketContext)
    const {key} = useContext(LanguageContext)

    const [categories, setCategories] = useState<CategoriesType[]>([])
    const [actualCategories, setActualCategories] = useState<ActualCategoriesType[]>([])

    useEffect(() => {
        changeCategoriesLanguage()
    }, [key, categories])

    const changeCategoriesLanguage = () => {
        const result = categories.map(category => {
            let object = Object.entries(category.name)
            for (let [name, value] of object) {
                if (name === key) {
                    return {
                        _id: category._id, name: value
                    }
                }
            }
        })
        setActualCategories(result as ActualCategoriesType[])
    }

    const getCategories = async (): Promise<void> => {
        preloader(true)
        await requestCategories.getCategories()
            .then(res => {
                setCategories(res.data)
                preloader(false)
            })
            .catch(error => {
                toast(error.response.data.message)
                preloader(false)
            })
    }

    return <CategoriesContext.Provider value={{actualCategories, getCategories}}>
        {props.children}
    </CategoriesContext.Provider>
}
