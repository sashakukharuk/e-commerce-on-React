import React from 'react'
import w from './Widget.module.css'
import {Popular} from "../../../State/Types/MainType";
import {NavLink} from "react-router-dom";

type PropsType = {
    popular: Popular[]
}

const Card: React.FC<{ popular: Popular }> = ({popular}) => {
    return <NavLink to={`/position/${popular._id}`}><img className={w.photo} src={`/${popular.image}`} alt="hh"/></NavLink>
}

export const Widget = React.memo(({popular}: PropsType) => {
    if (popular.length === 0) {
        return <div>Loading...</div>
    }
    return <div className={w.widget}>
        <div className={w.widgetBlockOne}>
            <div className={w.mainBlock}>
                <div className={w.mainBlockOne}>
                    <div className={w.cardOne}>
                        <Card popular={popular[0]}/>
                    </div>
                    <div className={w.cardTwo}>
                        <Card popular={popular[1]}/>
                    </div>
                </div>
                <div className={w.mainBlockTwo}>
                    <div className={w.cardThree}>
                        <Card popular={popular[2]}/>
                    </div>
                    <div className={w.cardThree}>
                        <Card popular={popular[3]}/>
                    </div>
                    <div className={w.cardThree}>
                        <Card popular={popular[4]}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={w.widgetBlockTwo}>
            <div className={w.mainBlockThree}>
                <div className={w.cardFour}>
                    <Card popular={popular[5]}/>
                </div>
            </div>
            <div className={w.mainBlockFour}>
                <div className={w.cardFive}>
                    <Card popular={popular[6]}/>
                </div>
                <div className={w.cardFive}>
                    <Card popular={popular[7]}/>
                </div>
            </div>
        </div>
        <div className={w.widgetBlockThree}>
            <div className={w.mainBlockFive}>
                <div className={w.cardSix}>
                    <Card popular={popular[8]}/>
                </div>
            </div>
            <div className={w.mainBlockSix}>
                <div className={w.cardSeven}>
                    <Card popular={popular[9]}/>
                </div>
                <div className={w.cardSeven}>
                    <Card popular={popular[10]}/>
                </div>
            </div>
            <div className={w.mainBlockSeven}>
                <div className={w.cardEight}>
                    <Card popular={popular[11]}/>
                </div>
                <div className={w.cardNine}>
                    <Card popular={popular[12]}/>
                </div>
            </div>
        </div>
    </div>
})
