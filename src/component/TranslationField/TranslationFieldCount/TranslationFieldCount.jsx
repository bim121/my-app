import React from "react"
import './TranslationFieldCount.css';
const TranslationFieldCount = (props) => {
    return (
        <div className='translation-field-count'>
            <p className='succesfull-answer'>succesful answer: {props.succesfulAnswer}</p>
            <p className='wrong-answer'>wrong answer: {props.wrongAnswer}</p>
        </div>
    )
}

export default TranslationFieldCount;