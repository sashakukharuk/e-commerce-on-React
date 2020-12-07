import React, {useContext, useState} from "react";
import {BasketContext} from "./BasketState";
import {FilterType, initialPositionsState, PositionsType} from "./Types/PositionsType";
import {initialForm} from "../Components/Component/Form/createObject";
import {requestPositions} from "../Request/Request";
import {LanguageContext} from "./LanguageState";

export const PositionsContext = React.createContext<initialPositionsState>({} as initialPositionsState)

export const PositionsState = (props: any) => {
    const {language} = useContext(LanguageContext)
    const from = initialForm('from', 'number', 'from', '', language.fromL, false, 0, 0)
    const to = initialForm('to', 'number', 'to', '', language.toL, false, 3, 30)
    const size = initialForm('size', 'text', 'size', '', '', false, 3, 50)
    const [positions, setPositions] = useState<PositionsType[]>([])
    const [disabled, setDisabled] = useState(false)
    let [isSize, setIsSize] = useState(false)
    const sizeValue = [{value: 'S'}, {value: 'M'}, {value: 'L'}, {value: 'XL'}, {value: 'XXL'}]
    const {toast} = useContext(BasketContext)
    const {preloader} = useContext(BasketContext)

    const openCloseSize = () => {
        isSize = !isSize
        setIsSize(isSize)
    }

    const getPositions = async (id: string, filter: FilterType | undefined): Promise<void> => {
        setDisabled(true)
        preloader(true)
        await requestPositions.getPositions(id, filter?.from || '', filter?.to || '', filter?.size || '')
            .then(res => {
                setPositions(res.data)
                setDisabled(false)
                preloader(false)
            })
            .catch(error => {
                toast(error.response.data.message)
                preloader(false)
            })
    }
    return <PositionsContext.Provider value={{positions, from, to, size, disabled, isSize, sizeValue, openCloseSize, getPositions}}>
        {props.children}
    </PositionsContext.Provider>
}
