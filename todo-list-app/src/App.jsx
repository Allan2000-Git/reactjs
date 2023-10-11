import { useState } from 'react'
import './App.css'
import TodoTasks from './components/TodoTasks'
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask=()=>{
    setTasks((previousValue)=>{
      return [...previousValue, todo]
    });
    setTodo("");//empty the input field
  }

  const deleteTask =(id)=>{
    setTasks((previousValue)=>{
      return previousValue.filter((val, index)=>{
        return id !== index; // filter/return only those items that match the condition
      })
    })
  }

  return (
    <>
      <div className="w-full min-h-screen bg-indigo-200 flex flex-wrap items-center justify-center">
        <div className="bg-white mx-auto sm:w-1/2 h-1/2 rounded-md py-8 w-[300px]">
          <h1 className="text-center bg-orange-400 py-4 text-3xl text-white font-semibold">Todo List</h1>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-[3rem] mt-[1.5rem]">
            <input placeholder='Enter your task' value={todo} onChange={(e)=>setTodo(e.target.value)} className="outline-0 text-[1.3rem] px-1 py-2 border-b-2 rounded-lg border-b-orange-400 bg-transparent" type="text" name="todo"/>
            <button onClick={addTask} type="submit" className="w-[45px] h-[45px] bg-orange-400 rounded-full text-white"><AddIcon/></button>
          </div>
          <TodoTasks arr={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </>
  )
}

export default App
