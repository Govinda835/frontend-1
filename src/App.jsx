import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Page from "./page"

const App = () => {
  return(
  <BrowserRouter>
     <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/page" element={<Page/>}/>
     </Routes>
  </BrowserRouter>
  )
}

export default App


