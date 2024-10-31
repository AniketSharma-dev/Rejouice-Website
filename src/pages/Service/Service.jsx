import React from 'react'
import ServiceCards from './ServiceCards'

const Service = () => {
    return (
        <>
            <div className="w-full min-h-screen relative p-[3vw] flex justify-center items-center flex-col gap-3">
                <div className="text-center flex justify-center items-center gap-4">
                    <h4 className=' text-center text-base flex justify-center items-center gap-1'>Agency & Venture <span className=" text-center bg-black rounded-full text-[12px] px-[6px]">Models</span></h4>
                    <span className="text-black -rotate-90 text-xl iblock align-y:middle transform rotate:-90deg">↵</span>
                </div>
                <div className="text-center">
                    <h2 className="line relative text-black text-7xl">Explore Our Service</h2>
                    <h2 className="lineEffect relative text-black text-7xl">& Engagement Models</h2>
                </div>
            </div>
            <ServiceCards />
        </>

    )
}

export default Service