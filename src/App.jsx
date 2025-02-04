import React from "react"
import Home from "./Pages/Home"
import { Route, Router, Routes } from "react-router-dom"
import Headphones from "./Pages/Headphones"


function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
      </Routes>

    </div>
  )
}

export default App
