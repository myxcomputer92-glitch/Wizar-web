import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css'
import './Services.css'
import './About.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Services/>
   <About/>
   <Footer/>
    </>
  )
}

export default App
