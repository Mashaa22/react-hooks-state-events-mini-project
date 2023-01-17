import React from "react";
import { TASKS } from "../data";



function Task( TASKS ) {
  console.log({TASKS})
  
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;

// listTask.map((task, index) => {
//   return (
//     <div className="task" key={index}>
//       <div className="label">{ task.category}</div>
//       <div className="text">{ task.text}</div>
//       <button className="delete">X</button>
//     </div>
//   );
// })
