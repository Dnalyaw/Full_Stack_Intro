import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [DBResponse, setMyDBResponse] = useState('...')

  useEffect(() => {
    fetch('http://localhost:2000')
    .then((response) => response.json())
    .then((data) => setMyDBResponse(JSON.stringify(data)))
  }, []);



  return (
    <>
      {DBResponse}
    </>
  )
}

export default App
