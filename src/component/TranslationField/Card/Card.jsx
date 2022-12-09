import React from "react"
import './Card.css';
const Card = (props) => {
    return (
        <div className='card'>
            <p>
                {props.word}
            </p>
        </div>
    )
}

export default Card;