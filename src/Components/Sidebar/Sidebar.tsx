import React, {useContext, useEffect} from 'react'
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {CategoriesContext} from "../../State/CategoriesState";

export const Sidebar = () => {
    const {actualCategories, getCategories} = useContext(CategoriesContext)
    useEffect(() => {getCategories()}, [actualCategories.length])
    return <>
        <div className={s.sidebar}>
            <div className={s.menu}>
                <ul className={s.menuPosition}>
                    {actualCategories && actualCategories.map(category => <NavLink to={`/positions/${category._id}`}  key={category._id}>
                        <li className={s.position}>
                            <h3 className={s.pTitle}>
                                {category.name}
                            </h3>
                        </li>
                    </NavLink>)}
                </ul>
            </div>
        </div>
    </>
}
