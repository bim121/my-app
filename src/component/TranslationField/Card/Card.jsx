import React from "react"
import style from './Card.module.css';

const Card = (props) => {
    return (
        <div className={style.card}>
            <p>
                {props.word}
            </p>
        </div>
    )
}

export default Card;