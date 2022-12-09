import React from "react"
import './Header.css';

const Header = (props) => {
    return (
        <header>
          <h1>{props.text}{props.userName}</h1>
        </header>
    )
}

export default Header;