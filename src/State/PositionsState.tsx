import React, {useEffect, useState} from "react";
import axios from 'axios'
// type ImgSmall = {
//     img: string;
// }
//
// export type PositionType = {
//     _id: string;
//     imgMain: string;
//     imgLarge: string;
//     imgSmall: Array<ImgSmall>;
//     name: string;
//     price: number;
//     size: string;
//     overview: string;
//     categoryId: string;
//     quantity: number;
// }

const initialState = {
    position: {
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
    }
}
export type PositionType = typeof initialState
export const PositionContext = React.createContext(initialState)

export const PositionState = (props: any) => {
    let [position, setPosition] = useState(initialState.position)
    // let [quantity, setQuantity] = useState(1)

    useEffect(() => {
        getPosition()
    }, [position])

    const getPosition = async () => {
        const data = await axios.get<PositionType>(`/api/position/${'id'}`).then(res => res.data)
        setPosition(data.position)
    }
    const dispatchQuantity = (quantity: number) => {
        position.quantity = quantity
        setPosition(position)
    }
    return <PositionContext.Provider value={{position}}>
        {props.children}
    </PositionContext.Provider>
}
