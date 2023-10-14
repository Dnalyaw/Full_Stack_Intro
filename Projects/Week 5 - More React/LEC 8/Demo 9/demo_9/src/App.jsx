import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' //variable actually correcponds to the actual logo
import './App.css'



//npm install vite
// "npm create vite" in terminal, Pick React and Javascript
//npm run dev




function App() {
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
}

export default App
