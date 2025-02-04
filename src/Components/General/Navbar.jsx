import React from 'react'
import logo from "../../assets/logo.svg"
import cart from "../../assets/cartbutton.svg"
import { NavLink } from 'react-router-dom'
import { Badge } from '@material-tailwind/react'

function Navbar() {

    const listItems = [
        {
            id: 1,
            item: "HOME",
            path: "/"
        }, {
            id: 2,
            item: "HEADPHONES",
            path: "/headphones"
        }, {
            id: 3,
            item: "SPEAKERS",
            path: "/speakers"
        }, {
            id: 4,
            item: "EARPHONES",
            path: "/earphones"
        }
    ]


    return (
        <div className='w-full h-[97px] bg-[#141414] flex flex-col justify-center items-center relative'>
            <div className='flex w-[80%] justify-between text-white'>
                <img src={logo} />
                <nav className='flex justify-around w-[50%] '>
                    {
                        listItems.map((item) => (
                            <NavLink
                                key={item.id}
                                className='hover:text-[#D87D4A]'
                                to={item.path}

                            >
                                <p>{item.item}</p>
                            </NavLink>
                        ))
                    }
                </nav>
                <Badge content="5">
                    <img src={cart} />
                </Badge>
            </div>
            <div className='border border-[#FFFFFF] opacity-25 w-[80%] absolute bottom-0 '></div>
        </div>
    )
}

export default Navbar
