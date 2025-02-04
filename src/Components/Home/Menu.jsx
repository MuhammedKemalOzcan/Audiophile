import React from 'react'
import headphone from "../../assets/Headphone.svg"
import earphone from "../../assets/earphone.svg"
import speaker from "../../assets/speaker.svg"
import { useNavigate } from 'react-router-dom'

function Menu() {

    const navigate = useNavigate();

    const menuItems = [
        {
            id: 1,
            name: "HEADPHONES",
            path: "/headphones",
            imagePath: headphone
        },
        {
            id: 2,
            name: "SPEAKERS",
            path: "/speakers",
            imagePath: speaker
        },
        {
            id: 3,
            name: "EARPHONES",
            path: "/earphones",
            imagePath: earphone
        },
    ]

    return (
        <div className='w-full h-[572px] flex justify-center items-center  '>
            <div className='w-[80%] h-[50%] flex items-center justify-between gap-16 '>
                {
                    menuItems.map((item) => (
                        <div
                            key={item.id}
                            className='w-[25%] h-[204px] bg-[#F1F1F1] rounded-[8px] flex flex-col relative text-center items-center '>
                            <img src={item.imagePath} className='absolute -top-20' />
                            <div className='absolute bottom-8 flex flex-col gap-4'>
                                <h6>{item.name}</h6>
                                <button
                                    className='button-3'
                                    onClick={() => navigate(item.path)}
                                >
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu
