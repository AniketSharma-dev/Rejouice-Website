import React from 'react'
import Navbar from '../Navbar/Navbar'
import videoSrc from "../../assets/Video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4"


const Hero = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden">
            <header className="w-full h-screen px-10 py-10 absolute top-0 text-white">
                <Navbar />
            </header>
            <video autoPlay loop muted className="object-cover w-full h-full" src={videoSrc} >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="w-full h-fit absolute -bottom-40">
                <div className="flex h-fit justify-center items-center">
                    <h1 className=" h-fit text-[27vw] text-white" >
                        <span>r</span>
                        <span>e</span>
                        <span>j</span>
                        <span>o</span>
                        <span>u</span>
                        <span>i</span>
                        <span>c</span>
                        <span>e</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero