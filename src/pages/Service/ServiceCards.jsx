import React from 'react'
import img1 from "../../assets/images/img1.avif"

const ServiceCards = () => {
    return (
        <div className="w-full h-screen p-[3vw]  ">
            <div className="flex justify-between items-center text-2xl py-2">
                <h2>Transforming visions into brands.</h2>
                <h2><span className="text-black -scale-x-100 text-3xl mr-2 font-thin inline-block">↵</span> See the work</h2></div>
            <div className="w-full h-full flex justify-center items-center gap-4">
                <div className="w-full h-full bg-red-300"><img1/></div>
                <div className="w-full h-full bg-green-300"></div>
                <div className="w-full h-full bg-blue-300"></div>
            </div>
        </div>
    )
}

export default ServiceCards