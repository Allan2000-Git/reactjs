import React, { useState } from 'react'

const FormsNew = () => {

  const [user,setUser]=useState({
    fName:'',
    lName:''
  });

  const sendUser=(event)=>{

    console.log(event.target.name);
    console.log(event.target.value);

    setUser((previousValue)=>{

        return{
            ...previousValue,//previousValue is a object containing all the fields (fName,lName)
            [event.target.name]:event.target.value
        }

        // if(event.target.name === 'fName'){
        //     return{
        //         fName:event.target.value,
        //         lName:previousValue.lName
        //     }
        // } else if(event.target.name === 'lName'){
        //     return{
        //         fName:previousValue.fName,
        //         lName:event.target.value
        //     }
        // }
    })
  }


  return (
    <>
        <h1>Hey, {user.fName} {user.lName}👋</h1>
        <div className='form'>
          <input onChange={sendUser} type="text" placeholder="Enter your first name" name="fName" value={user.fName}/>
          <br/>
          <input onChange={sendUser} type="text" placeholder="Enter your last name" name="lName" value={user.lName}/>
          <button>Send 🚀</button>
        </div>
    </>
  )
}

export default FormsNew
