import React from 'react'
import banner from "../../assets/homebanner.svg"

function Banner() {
  return (
    <div className='w-full h-[630px] bg-[#141414] justify-center items-center flex '>
      <div className='w-[80%] h-full flex justify-center items-center'>
        <div className='flex flex-col h-[346px] w-[40%] gap-6 '>
            <p className='text-gray-500'>N E W   P R O D U C T</p>
            <h1 className='text-white'>XX99 Mark II Headphones</h1>
            <p className='text-gray-500 w-[65%]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button className='button-1'>SEE PRODUCT</button>
        </div>
        <img src={banner} className='w-[60%] h-[630px] ' />
      </div>
    </div>
  )
}

export default Banner
