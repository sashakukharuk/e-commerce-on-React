import React, {useState} from "react";
import axios from 'axios'

const initialState = {
    positions: [{
        _id: '',
        imgMain: '',
        imgLarge: '',
        imgSmall: [{img:''}],
        name: '',
        price: 1,
        size: '',
        overview: '',
        categoryId: '',
        quantity: 1
    }],
    getPositions: (id: string)=>{}
}

export type PositionsType = typeof initialState
export const PositionsContext = React.createContext(initialState)

export const PositionsState = (props: any) => {
    let [positions, setPositions] = useState(initialState.positions)

    const getPositions = async (id: string): Promise<void> => {
        console.log("Request positions")
        const data = await axios.get<PositionsType>(`/api/categories/${id}`).then(res => res.data)
        setPositions(data.positions)
    }

    return <PositionsContext.Provider value={{positions, getPositions}}>
        {props.children}
    </PositionsContext.Provider>
}
