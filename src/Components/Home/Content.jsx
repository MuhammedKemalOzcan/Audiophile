import React from 'react'
import speaker from "../../assets/speaker.svg"

function Content() {
    return (
        <div className='w-full h-[1664px] flex flex-col gap-12 items-center '>
            <div className='w-[80%] h-[560px] bg-[#D87D4A] flex relative  items-center rounded-[8px] '>
                <img src={speaker} className='w-[28%] flex absolute -bottom-5 left-40 ' />
                <div className='w-[30%] h-[300px] absolute right-60 flex flex-col gap-10 '>
                    <h1 className='text-[#FFFFFF] '>ZX9 SPEAKER</h1>
                    <p className='text-[#FFFFFF] opacity-75 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className='button-2'>SEE PRODUCT</button>
                </div>
            </div>
            <div className='zx7 w-[80%] h-[320px] flex flex-col relative rounded-[8px]'>
                <div className='absolute top-[35%] left-[5%] flex flex-col gap-8  '>
                    <h4>ZX7 SPEAKER</h4>
                    <button className='button-2'>SEE PRODUCT</button>
                </div>
            </div>
            <div className='w-[80%] h-[320px] flex justify-between '>
                <div className='yx1 w-[49%] h-full rounded-[8px]'>

                </div>
                <div className='w-[49%] h-full bg-[#F1F1F1] rounded-[8px] px-[95px] py-24 flex flex-col gap-8 '>
                    <h4>YX1 EARPHONES</h4>
                    <button className='button-2'>SEE PRODUCT</button>
                </div>
            </div>
        </div>
    )
}

export default Content
