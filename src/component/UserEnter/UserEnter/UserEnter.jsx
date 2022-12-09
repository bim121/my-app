import React from "react"
import style from './UserEnter.module.css';
import Buttons from "../Buttons/Buttons";
const UserEnter = (props) => {
    return (
        <div className = {style.userEnter}>
            <label>Enter name</label>
            <input placeholder = "Enter name" value={props.inputOne} onChange={(event) => props.setInputOne(event.target.value)}></input>
            <Buttons easyLevel={props.easyLevel} mediumLevel={props.mediumLevel} hardLevel={props.hardLevel}/>
      </div>
    )
}

export default UserEnter;