import React, {useEffect, useState} from "react";
import axios from 'axios'

const initialState = {
    categories: [{
        _id: '',
        name: ''
    }],
    getCategories: ()=>{}
}

export type CategoriesType = typeof initialState
export const CategoriesContext = React.createContext(initialState)

export const CategoriesState = (props: any) => {
    let [categories, setCategories] = useState(initialState.categories)
    useEffect(() => {}, [categories])
    const getCategories = async (): Promise<void> => {
        console.log("Request categories")
        // const data = await axios.get(`http://localhost:5000/api/categories`).then(res => res.data)
        // setCategories(data)
    }

    return <CategoriesContext.Provider value={{categories, getCategories}}>
        {props.children}
    </CategoriesContext.Provider>
}
