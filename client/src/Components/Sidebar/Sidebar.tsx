import React, {useContext} from 'react'
import s from './Sidebar.module.css'
import {Li} from "./Li";
import {CategoriesContext} from "../../State/Categories/CategoriesProvider";

export const Sidebar = () => {
    const {activeId, actualCategories} = useContext(CategoriesContext)

    return <>
        <div className={s.sidebar}>
            <div className={s.menu}>
                <ul className={s.menuPosition}>
                    {actualCategories && actualCategories.map(category => <Li key={category._id} category={category} activeId={activeId}/>)}
                </ul>
            </div>
        </div>
    </>
}
