import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import style from "./ToDoList.module.css";

export const ToDoList = () => {
  const [todo, SetToDo] = useState([
    {
      id: 1,
      title: "Study JS course",
    },
    {
      id: 2,
      title: "Report",
    },
    {
      id: 3,
      title: "Chill out",
    },
    {
      id: 4,
      title: "Work",
    },
  ]);

  const removeToDo = () => {};
  return (
    <div className={style.todo}>
      {todo.map((item, index) => (
        <ToDoItem key={item.id} title={item.title} removeToDo={removeToDo} />
      ))}
    </div>
  );
};
