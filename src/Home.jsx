import {useEffect} from 'react'
import Navbar from './components/Navbar'
import Card from "./components/card"
import axios from 'axios'

const Home = () => {
    async function fetchBlogs()
  {
    const response = await axios.get("http:localhost:5000/blog")
  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div>
        <Navbar/>
        <div class="flex align-center space-x-5 flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        
    </div>
  )
}

export default Home
