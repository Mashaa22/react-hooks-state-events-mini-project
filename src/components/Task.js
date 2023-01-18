import React from "react";


function Task({ listTask }) {
  console.log(listTask)
  
  const data = listTask.map((tasks, index) => {
    return ( 
        <div className="task" key={index}>
        <div className="label">{ tasks.category}</div>
        <div className="text">{ tasks.text}</div>
          <button className="delete">X</button>
        </div>    
    )
  })

  return (
    <div>{data}</div>
  )


}

export default Task;

// return (
//   <div className="task">
//     <div className="label">CATEGORY HERE</div>
//     <div className="text">TEXT HERE</div>
//     <button className="delete">X</button>
//   </div>
// );