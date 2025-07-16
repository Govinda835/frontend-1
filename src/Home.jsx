import React from 'react'
import Navbar from './components/Navbar'
import Card from "./components/card"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div class="flex align-center space-x-5">
          <Card/>
          <Card/>
          <Card/>
        </div>
        
    </div>
  )
}

export default Home
