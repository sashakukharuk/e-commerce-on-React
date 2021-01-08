import React, {useContext, useEffect} from 'react'
import {Widget} from "../../Component/Widget/Widget";
import {MainContext} from "../../../State/Main/MainProvider";
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";

type PropsType = {
    activeLi$: EventEmitter<string>
}

export const MainPage = ({activeLi$}: PropsType) => {
    const {popular, getPopular} = useContext(MainContext)
    useEffect(() => {
        activeLi$.emit('')
        if (popular.length === 0) {
            getPopular()
        }
    }, [])
    return <Widget popular={popular}/>
}

