import React from "react"
import Home from "./Pages/Home"
import { Route, Router, Routes } from "react-router-dom"
import Headphones from "./Pages/Headphones"
import ProductDetails from "./Pages/ProductDetails"


function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>

    </div>
  )
}

export default App
