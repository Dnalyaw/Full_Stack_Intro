import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from "./components/button"
//"npm create vite" in terminal, Pick React and Javascript


function App() {
  const [count, setCount] = useState(0);//state, states that count = 0 and that you can use the function on it
    
  function updateCount() {
      setCount(count + 1);
  }

  {/** this just sets the default of the name that is used in p, sets the state to a default valuegf */}
  const [name, setName] = useState("Wayland");

  const updateName = (event) => {
    {/** event is a react made thing that looks at the HTML tag that the function was called in */}
    setName(event.target.value);
  }


  return (
    <div>
      {/** In this app, change in value causes updateName() to occur */}
      <input type="text" onChange={updateName}/>
        <p>Hello {name}!</p>
    </div>
  )

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
