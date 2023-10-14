import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world</div>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
]);



function App() {
  const [fact, setFact] = useState("Loading...");

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
    .then(res => res.json())
    .then(data => setFact(data.activity));
  }, [])

  return (
    <>
        <RouterProvider router={router} />
        <button>
        Generate something to do
        </button>
        <br></br>
        {fact}
    </>
  )
}

export default App
