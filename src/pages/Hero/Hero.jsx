import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import videoSrc from "../../assets/Video/658ef98d531ac2845a270509_RJ-2-0-Videobackground_compressed.mp4";
import gsap from "gsap";

const Hero = () => {
  const cursor = useRef(null);


  const handelClick = () => {
    console.log("Hello");
  };

  useEffect(() => {
    // Set initial position to the center of the viewport
    const cursorElement = cursor.current;
    const cursorWidth = cursorElement.offsetWidth;
    const cursorHeight = cursorElement.offsetHeight;

    // Center position
    const centerX = window.innerWidth / 2 - cursorWidth / 2;
    const centerY = window.innerHeight / 2 - cursorHeight / 2;

    // Apply the initial animation to center
    gsap.set(cursorElement, {
      x: centerX,
      y: centerY,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(cursorElement, {
        y: centerY + scrollY / 1.5, // Adjust factor as needed for effect
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleMouseMove = (event) => {
    const cursorElement = cursor.current;
    const cursorWidth = cursorElement.offsetWidth;
    const cursorHeight = cursorElement.offsetHeight;

    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate horizontal and vertical offsets based on distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Adjust multiplier to increase or decrease the "repel" effect strength
    const repelFactor = 0.201; // Adjust to increase/decrease the effect intensity

    const offsetX = distanceX * repelFactor;
    const offsetY = distanceY * repelFactor;

    // Set new position with repel effect
    gsap.to(cursorElement, {
      x: clientX + offsetX - cursorWidth / 2,
      y: clientY + offsetY - cursorHeight / 2,
      delay: 0.01,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove} className="w-full h-screen relative overflow-hidden"
    >
      <div
        ref={cursor}
        onClick={handelClick}
        className="w-[8vw] h-[8vw] bg-[#1d1d1db1] rounded-full flex justify-center items-center absolute z-[1]"
        style={{
          transform: "translate(-50%, -50%)", // Center around the mouse
        }}>
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
