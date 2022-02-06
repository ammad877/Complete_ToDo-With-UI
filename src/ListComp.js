import React from "react";
import { useState } from "react/cjs/react.development";

const ListCom = ({text}) => {
    const [line, setLIne] = useState(false)
    const cutLine = () => {
        setLIne(true)
    }
    return (
        <div className="todo_style">
            <span onClick={cutLine}><i className="uil uil-trash-alt del_icons"></i> : </span>
            <li style={{textDecoration: line ? "line-through" : "none"}}> {text} </li>
        </div>
    )
}

export default ListCom;