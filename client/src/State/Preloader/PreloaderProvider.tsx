import React, {useReducer} from 'react'
import {EventEmitter} from "@umijs/hooks/lib/useEventEmitter";
import {preloaderReducer} from "./ReducerPreloader";
import {actionPreloader} from "./ActionsPreloader";
import {preloaderState} from "./StatePreloader";

export const PreloaderContext = React.createContext({})

type PropsType = {
    preloader$:  EventEmitter<boolean>
    children: any
}

export const PreloaderProvider = ({preloader$, children}: PropsType) => {
    const [state, dispatch] = useReducer(preloaderReducer, preloaderState)

    preloader$.useSubscription((isPre: boolean) => dispatch(actionPreloader.setPreloader(isPre)))

    return <PreloaderContext.Provider value={{}}>
        {state.isPreloader && children}
    </PreloaderContext.Provider>
}
