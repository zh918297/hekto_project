import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nihil voluptatibus labore corrupti non quas, consequatur 
         aliquam? Odio dicta harum atque illo doloribus est a 
         reprehenderit 
         voluptas quia voluptates, et at?</p>
         <button onClick={()=>alert('hello world')}>Click me</button>
         <Navbar/>
         <Hero/>
          

    </>
    
  )
}

export default App
