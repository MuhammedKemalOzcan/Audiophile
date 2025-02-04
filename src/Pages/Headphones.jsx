import React from 'react'
import xx992 from "../assets/XX99-2.svg"
import xx991 from "../assets/XX99-1.svg"
import xx59 from "../assets/XX59.svg"
import Navbar from '../Components/General/Navbar'
import Footer from '../Components/General/Footer'
import Introduction from '../Components/Home/Introduction'
import Menu from '../Components/Home/Menu'
import Products from '../Components/Headphones/Products'
import Title from '../Components/Headphones/Title'

function Headphones() {

    const products = [
        {
            id: 1,
            image: xx992,
            isNew: true,
            name: "XX99 MARK II HEADPHONES",
            description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        },
        {
            id: 2,
            image: xx991,
            isNew: false,
            name: "XX99 MARK I HEADPHONES",
            description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        },
        {
            id: 3,
            image: xx59,
            isNew: false,
            name: "XX59 HEADPHONES",
            description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        },
    ]

    return (
        <div>
            <Navbar />
            <Title />
            <Products products={products} />
            <Menu />
            <Introduction />
            <Footer />
        </div>
    )
}

export default Headphones
