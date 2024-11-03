import { gsap, Expo } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const AboutLink = () => {
    const aboutRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {

        gsap.to(lineRef.current, {
            y: "0%",      
            opacity: 1,   // Fade in effect
            stagger: 0.2, // Staggered animation for each line
            duration: 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 70%", // Start animation when section reaches 70% of viewport height
                end: "top 50%",   // End animation at 50%
                scrub: 2,         // Smooth scrolling effect
            },
        });


    }, [])

    return (
        <>
            <div  className="w-full min-h-[65vh] relative p-[3vw] flex justify-center items-center flex-col gap-3">
                <div ref={aboutRef} className="text-center flex justify-center items-center gap-4">
                    <h4 className='text-center text-base flex justify-center items-center gap-1'>
                        We’re uniquely built
                    </h4>
                    <span className="text-black -rotate-90 text-xl iblock align-y:middle transform rotate:-90deg">↵</span>
                </div>
                <div className="text-center overflow-hidden">
                    <h2 ref={lineRef} className="lineEffect relative overflow-hidden pb-2 translate-y-full  text-black text-6xl">About us</h2>
                </div>
            </div>
        </>
    )
}

export default AboutLink