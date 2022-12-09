import React from "react"
import style from './Buttons.module.css';
const UserEnter = (props) => {
    return (
        <div className={style.buttons}>
            <button onClick={props.easyLevel}>Легкий</button>
            <button onClick={props.mediumLevel}>Середній</button>
            <button onClick={props.hardLevel}>Важкий</button>
        </div>
    )
}

export default UserEnter;