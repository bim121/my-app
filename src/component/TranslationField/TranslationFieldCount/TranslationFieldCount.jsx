import React from "react"
import style from './TranslationFieldCount.module.css';
const TranslationFieldCount = (props) => {
    return (
        <div className={style.translationFieldCount}>
            <p className={style.succesfullAnswer}>succesful answer: {props.succesfulAnswer}</p>
            <p className={style.wrongAnswer}>wrong answer: {props.wrongAnswer}</p>
        </div>
    )
}

export default TranslationFieldCount;