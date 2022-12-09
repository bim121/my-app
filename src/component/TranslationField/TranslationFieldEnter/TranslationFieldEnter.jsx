import React from "react"
import './TranslationFieldEnter.css';
const TranslationFieldEnter = (props) => {
    return (
        <div className='translation-field-enter'>
            <input placeholder = "Enter translation" value={props.inputTwo} onChange={(event) => props.setInputTwo(event.target.value)}></input>
        </div>
    )
}

export default TranslationFieldEnter;