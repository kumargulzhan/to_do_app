import React from "react";
import style from "./ToDoItem.module.css";

export const ToDoItem = (props) => {
  return (
    <div className={style.todo_item}>
      <div className={style.todo_content}>
        <strong>{props.title}</strong>
        {/* <strong style={{ fontWeight: "bold", fontSize: 25, paddingTop: 10 }}> */}
      </div>
      <button onClick={props.removeToDo} className={style.todo_delete}>
        Remove
      </button>
    </div>
  );
};
