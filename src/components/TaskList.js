import React from "react";
import Task from "./Task";

function TaskList({ listTask }) {
  // console.log(listTask)
  
  const task = listTask.map((tasks) => {
    return (
      <Task key={tasks} text={tasks.text} category={tasks.category}   />
    )
  })
 
  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
