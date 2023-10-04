import React, { useState } from 'react'

const Forms = () => {

  const [name,setName]=useState("");
  const [user,setUser]=useState("");

  const sendName = (event)=>{
    setName(event.target.value);
  }

  const sendUserName=(event)=>{
    event.preventDefault();
    setUser(name);
  }


  return (
    <>
      {/*<h1>Hey, {user}👋</h1>
      <div className='form'>
        <input onChange={sendName} type="text" placeholder="Enter your name" value={name}/>
        <button onClick={sendUserName}>Send 🚀</button>
      </div>*/}

      <form onSubmit={sendUserName}>
        <h1>Hey, {user}👋</h1>
        <div className='form'>
          <input onChange={sendName} type="text" placeholder="Enter your name" value={name}/>
          <button>Send 🚀</button>
        </div>
      </form>
    </>
  )
}

export default Forms
