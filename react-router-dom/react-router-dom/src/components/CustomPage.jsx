import React from 'react'
import { useParams } from 'react-router-dom'

const CustomPage = () => {

const {userid} = useParams();
    
  return (
    <>
      <div className="m-2 text-center text-xl">
        <div className="py-5 bg-blue-900 text-white">
        User: {userid}
        </div>
      </div>
    </>
  )
}

export default CustomPage
