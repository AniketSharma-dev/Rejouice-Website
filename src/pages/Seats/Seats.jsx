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

        // Animate only the second circle to create the moving effect
        timeline.fromTo(
            ".circle2",
            { strokeDashoffset: 308 },
            { strokeDashoffset: 0, duration: 2.8, ease: "power2.out" }
        );

        // Rotate the SVG to move the dot along the circle path
        timeline.to(
            ".dotSvg",
            { rotation: -90 },
            // { rotation: 135 }, // Start the rotation at 135 degrees
            { rotation: 370, duration: 2.8, ease: "power2.out" } // Rotate 235 degrees from the initial 135
        );
    }, []);

    return (
        <div ref={seats} className="w-full h-screen flex justify-center items-center relative">
            <svg className="w-[40%] absolute z-10 transform rotate-[-90deg] dotSvg" viewBox="0 0 100 100">
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
                    strokeDashoffset="0" // Static line, no animation applied here
                    style={{ opacity: 0.3 }}
                ></circle>
                {/* Animated circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#fff"
                    strokeWidth="0.25"
                    fill="none"
                    className="circle2"
                    strokeDasharray="308"
                    strokeDashoffset="308" // Starts fully offset
                ></circle>
                {/* Dot positioned at the top, rotating with the SVG */}
                <circle cx="50" cy="1" r="1" fill="#fff"></circle>
            </svg>
            <video
                className="w-[70%] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"
            ></video>
        </div>
    );
};

export default Seats;

