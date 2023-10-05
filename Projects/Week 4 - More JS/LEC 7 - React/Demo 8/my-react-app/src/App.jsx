import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from "./components/button"



function App() {
  const [count, setCount] = useState(0);//state, states that count = 0 and that you can use the function on it
    
  function updateCount() {
      setCount(count + 1);
  }

  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPNdlwYyvncvJnwmSfhbhb71WYf_D2L4a1443WO4&s"></img>
      <div>hi</div>
      <Button title="first button" text="click me" update={updateCount}/>
      <Button title="second button" text="click me 2" update={updateCount}/>
      <p>count: {count}</p>
    </>
  )
}

export default App
