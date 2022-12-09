import React from "react"
import './EnglishLevel.css';
const EnglishLevel = (props) => {
    return (
        <p>Your level is <span>{props.level}</span></p>
    )
}

export default EnglishLevel;