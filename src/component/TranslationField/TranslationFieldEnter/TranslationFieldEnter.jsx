import React from "react"
import style from './TranslationFieldEnter.module.css';
const TranslationFieldEnter = (props) => {
    return (
        <div className={style.translationFieldEnter}>
            <input placeholder = "Enter translation" value={props.inputTwo} onChange={(event) => props.setInputTwo(event.target.value)}></input>
        </div>
    )
}

export default TranslationFieldEnter;