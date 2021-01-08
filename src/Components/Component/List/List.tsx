import React from 'react'
import l from './List.module.css'

type ListType = {
    arrValue: Array<{ value: string }>
    applyField: (value: string) => void
}

export const List = ({arrValue, applyField}: ListType) => {
    return <div className={l.menu}>
        <ul>
            {arrValue.map(item => <li key={item.value} onClick={() => applyField(item.value)}>{item.value}</li>)}
        </ul>
    </div>
}
