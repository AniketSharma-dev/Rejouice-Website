import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import videoSrc from "../../assets/Video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4";
import gsap from "gsap";

const Hero = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursor = useRef(null);

  const handelClick = () => {
    console.log("Hello");
  };

  const handleMouseMove = (dets) => {
    const cursorElement = cursor.current;
    const cursorWidth = cursorElement.offsetWidth;
    const cursorHeight = cursorElement.offsetHeight;

    gsap.to(cursorElement, {
      x: dets.clientX - cursorWidth / 2,
      y: dets.clientY - cursorHeight / 2,
      delay: 0.1,
    });
  };

  const handleMouseEnter = () => {
    gsap.to(cursor.current, {
      scale: 1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursor.current, {
      scale: 0,
    });
  };

  


  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-screen relative overflow-hidden"
    >
      <div
        ref={cursor}
        onClick={handelClick}
        className="w-[8vw] h-[8vw] bg-[#1d1d1db1] rounded-full flex justify-center items-center absolute z-[1]"
        style={{
          transform: "translate(-50%, -50%)", // Center around the mouse
        }}
        // style={{
        //     left: `${mousePosition.x}px`, // Offset to center cursor
        //     top: `${mousePosition.y}px`, // Offset to center cursor
        // }}
      >
        <h5 className="pointer-events-none select-none text-white">
          Play Reel
        </h5>
      </div>
      <header className="w-full h-screen px-10 py-10 absolute z-10 top-0 text-white">
        <Navbar />
      </header>
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
        src={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-fit absolute z-10 -bottom-40 pointer-events-none select-none">
        <div className="flex h-fit justify-center items-center">
          <h1 className=" h-fit text-[27vw] text-white ">
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
  );
};

export default Hero;
