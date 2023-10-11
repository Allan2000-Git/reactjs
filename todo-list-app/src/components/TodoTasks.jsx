import React from 'react'
import DisplayTasks from './DisplayTasks'

const TodoTasks = (props) => {
  return (
    <>
        <div className="mt-8 px-8 text-[1.3rem]">
            <ul className="flex flex-wrap flex-col gap-4">
                {
                props.arr.map((task, index) =>{
                    return(
                        <DisplayTasks task={task} key={index} id={index} deleteTask={props.deleteTask}/>
                    )
                })
                }
            </ul>
        </div>
    </>
  )
}

export default TodoTasks
