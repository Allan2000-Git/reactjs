import React, {useState} from 'react'

const DigitalClock = () => {
    let currentTime = new Date().toLocaleTimeString();

    let [time, getTime] = useState(currentTime)
  
    setInterval(()=>{
        currentTime = new Date().toLocaleTimeString();
        getTime(currentTime);
    },1000);
  
    return (
      <>
        <h1>{time}</h1>
      </>
    );
}

export default DigitalClock
