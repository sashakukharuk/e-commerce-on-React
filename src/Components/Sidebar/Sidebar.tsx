import React, {useContext, useEffect} from 'react'
import s from './Sidebar.module.css'
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {Li} from "./Li";
import {CategoriesContext} from "../../State/Categories/CategoriesProvider";

export const Sidebar: React.FC<{ activeLi$: EventEmitter<string> }> = ({activeLi$}) => {
    const {activeId, actualCategories, getCategories} = useContext(CategoriesContext)
    useEffect(() => {getCategories()}, [actualCategories.length])
    return <>
        <div className={s.sidebar}>
            <div className={s.menu}>
                <ul className={s.menuPosition}>
                    {actualCategories && actualCategories.map(category => <Li key={category._id} category={category} activeId={activeId} activeLi$={activeLi$}/>)}
                </ul>
            </div>
        </div>
    </>
}
