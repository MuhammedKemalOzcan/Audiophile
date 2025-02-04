import React from 'react'
import Navbar from '../Components/General/Navbar'
import Banner from '../Components/Home/Banner'
import Menu from '../Components/Home/Menu'
import Content from '../Components/Home/Content'
import Introduction from '../Components/Home/Introduction'
import Footer from '../Components/General/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Menu />
            <Content />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Home
