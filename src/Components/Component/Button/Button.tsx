import React from 'react'
import cn from 'classnames'
import b from './Button.module.css'

type ButtonType = {
    disabled: boolean
    name: string
    onSubmit: () => void
}

export const Button = ({disabled, name, onSubmit}: ButtonType) => {
    return <>
            <button className={cn(b.btn, disabled && b.active)} disabled={disabled} onClick={onSubmit}>{name}</button>
        </>
}
