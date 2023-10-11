import React from 'react'

const DisplayTasks = (props) => {
  return (
    <>
        <div className="flex gap-4 items-center">
            <i className="fa fa-times text-2xl cursor-pointer" style={{color: "#fb923c"}} onClick={()=>props.deleteTask(props.id)}></i>
            <li>{props.task}</li>
        </div>
    </>
  )
}

export default DisplayTasks
