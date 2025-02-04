import React from 'react'
import intro from "../../assets/intro.svg"


function Introduction() {
    return (
        <div className='w-full h-[988px] flex justify-center'>
            <div className='w-[80%] h-[588px] flex items-center justify-between '>
                <div className='w-[40%] flex flex-col gap-8'>
                    <h2>
                        BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR
                    </h2>
                    <p className='text-[#000000] opacity-50'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <img src={intro} className='w-[700px] ' />
            </div>
        </div>
    )
}

export default Introduction
