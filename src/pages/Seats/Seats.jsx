import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Seats = () => {
    const seats = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: seats.current,
                start: "top 10%",
                end: "top 0%",
                markers: true,
                scrub: 2,
            }
        });

        // Animate the second circle
        timeline.fromTo(
            ".circle2",
            { strokeDashoffset: 308 }, // Start fully offset
            { strokeDashoffset: 0, duration: 2.8, ease: "power2.out" }
        );

        // Rotate the dot and the second circle together
        timeline.to(".dotSvg", {
            rotation: 135, // Change this to the desired end position
            duration: 2.8,
            ease: "power2.out"
        });
    }, []);

    return (
        <div ref={seats} className="w-full h-screen flex justify-center items-center relative">
            <svg className="w-[40%] absolute z-10 transform -rotate-90" viewBox="0 0 100 100">
                {/* Static outer circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#fff"
                    strokeWidth="0.25"
                    fill="none"
                    className="circle1"
                    strokeDasharray="308"
                    style={{ strokeDashoffset: 0, opacity: 0.3 }} // Static line
                />
                {/* Animated circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#fff"
                    strokeWidth="0.25"
                    fill="none"
                    className="circle2"
                    strokeDasharray="73"
                    style={{ strokeDashoffset: 120 }} // Starts fully offset
                />
                {/* Dot positioned at the top, starting at -90 degrees */}
                <circle cx="50" cy="1" r="1" fill="#fff" className="dotSvg" />
            </svg>
            <video
                className="w-[70%] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"
            />
        </div>
    );
};

export default Seats;
