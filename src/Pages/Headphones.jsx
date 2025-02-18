import React, { useEffect, useState } from 'react'
import Navbar from '../Components/General/Navbar'
import Footer from '../Components/General/Footer'
import Introduction from '../Components/Home/Introduction'
import Menu from '../Components/Home/Menu'
import Products from '../Components/Headphones/Products'
import Title from '../Components/Headphones/Title'
import axios from 'axios'

function Headphones() {

    return (
        <div>
            <Navbar />
            <Title />
            <Products />
            <Menu />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Headphones
