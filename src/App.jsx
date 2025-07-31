import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Homepage/Homepage'
import Footer from './Components/Footer'
import Scrolltop from './Components/Scrolltop'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
      <Scrolltop/>
    </div>
  )
}
