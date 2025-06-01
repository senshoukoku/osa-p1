import React from "react";

const HandlerButton = ({onClick, text}) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
}

export default HandlerButton;