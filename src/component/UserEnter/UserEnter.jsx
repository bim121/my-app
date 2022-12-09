import React from "react"
import './UserEnter.css';
const UserEnter = (props) => {
    return (
        <div className = "userEnter">
            <label>Enter name</label>
            <input placeholder = "Enter name" value={props.inputOne} onChange={(event) => props.setInputOne(event.target.value)}></input>
            <button onClick={props.handlerClick}>Розпочати</button>
      </div>
    )
}

export default UserEnter;