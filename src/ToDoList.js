import React, { useState } from "react";
import ListCom from "./ListComp";
import "./index.css";
// import AddIcon from "@mui/icons-material/Add";

const ToDolist = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setNewItem((oldValue) => {
      return [...oldValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="section">
        <div className="main">
          <h1>Today Task</h1>
        </div>
        <div className="input">
          <input
            type="texty"
            value={item}
            placeholder="Add an Item"
            onChange={itemEvent}
          ></input>
          <span onClick={addItem}>
            <i class="uil uil-plus icons"></i>
          </span>
        </div>
        <div className="list">
          <ol>
            {newItem.map((val, index) => {
              return <ListCom text={val} key={index} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDolist;
