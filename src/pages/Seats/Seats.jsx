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

        // Animate the moving effect for the inner circle and rotation for the dot
        timeline.fromTo(
            ".circle2",
            { strokeDashoffset: 308 },
            { strokeDashoffset: 0, duration: 2.8, ease: "power2.out" }
        ).to(".dotSvg", {
            rotation: 370,
            duration: 2.8,
            ease: "power2.out"
        });
    }, []);

    return (
        <div ref={seats} className="w-full h-screen flex justify-center items-center relative">
            <svg className="w-[40%] absolute z-10 transform rotate-[-90deg] dotSvg" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#fff"
                    strokeWidth="0.25"
                    fill="none"
                    className="circle1"
                    strokeDasharray="308"
                    style={{ strokeDashoffset: 0, opacity: 0.3 }}
                />
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="#fff"
                    strokeWidth="0.25"
                    fill="none"
                    className="circle2"
                    strokeDasharray="308"
                    style={{ strokeDashoffset: 308 }}
                />
                <circle cx="50" cy="1" r="1" fill="#fff" />
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
