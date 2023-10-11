import React, { useEffect, useState } from 'react'

const GitHub = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/Allan2000-Git/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setData(data)
    })
    },[])
    
  return (
    <>
        <div className="m-2 text-center text-xl">
            <div className="py-5 bg-blue-900 text-white">
                Github Repositories: {data.followers}
            </div>
        </div>
    </>
  )
}

export default GitHub
