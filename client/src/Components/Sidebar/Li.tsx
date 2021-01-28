import React from 'react'
import cn from 'classnames'
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {ActualCategoriesType} from "../../State/Types/CategoriesType";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
type PropsType = {
    category: ActualCategoriesType
    activeId: string
}
export const Li = React.memo(({category, activeId}: PropsType) => {
    return  <NavLink to={`/positions/${category._id}`}>
        <li className={cn(s.position, activeId === category._id ? s.active : '')}>
            <h3 className={s.pTitle}>
                {category.name}
            </h3>
        </li>
    </NavLink>
})
