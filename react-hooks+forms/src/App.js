import { useState } from 'react';
import './App.css';  

function App() {

  let currentTime = new Date().toLocaleTimeString();

  let [time, getTime] = useState(currentTime)

  function getCurrentTime() {
    currentTime = new Date().toLocaleTimeString();
    getTime(currentTime);
  }

  return (
    <>
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </>
  );
}

export default App;
