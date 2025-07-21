import {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Card from "./components/card"

import axios from 'axios'

const Home = () => {
  const [blogs, setBlogs]=useState([])
  async function fetchBlogs()
  {
    const response = await axios.get("http://localhost:5000/blog")
     setBlogs(response.data.datas)
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
 console.log(blogs)
  return (
    <div>
        <Navbar/>
        <div className="flex align-center space-x-5 flex-wrap">
          
        {
          blogs.map(function(blog){
            return(
              <Card blog={blog}/>
            )
          })
        }
       
         
        </div>
        
    </div>
  )
}

export default Home
