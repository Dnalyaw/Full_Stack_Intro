import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");


  const [menuItems, setMenuItems] = useState([
    {
    item_name: "Pizza",
    price: 1.99,
    isAvailable: true,
    image: "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg"
  }]
  )
;{/** [state value, setter function] = state initilied with default setting */}


  

  return (
    <div>
      <header>Restaurant App</header>
      {menuItems.map(item => (
        <div key={item.item_name}>
          <div>{item.item_name}</div>
          <div>Price: {item.price}</div>
          <img src={item.image} width="200px"></img>
        </div>

      ))}
    </div>
  )
}

export default App
