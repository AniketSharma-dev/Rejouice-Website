import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Seats = () => {
    const cursor = useRef(null);
    const seatsRef = useRef(null);

    const handleMouseMove = (event) => {
        const cursorElement = cursor.current;

        // Update cursor position based on mouse position
        gsap.to(cursorElement, {
            x: event.clientX, // Set based on mouse X position
            y: event.clientY, // Set based on mouse Y position
            duration: 0.1,
            ease: "power2.out",
        });
    };

    const handleMouseEnter = () => {
        gsap.to(cursor.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cursor.current, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    useEffect(() => {
        // GSAP timeline and ScrollTrigger setup
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: seatsRef.current,
                start: "top 50%",
                end: "top 20%",
                scrub: 2,
                markers: true,
            }
        });

        timeline.fromTo(".dotSvg", {
            rotation: 0,
        }, {
            rotation: 215,
            transformOrigin: "50% 50%",
            duration: 4,
            ease: "power2.easeInOut",
            onUpdate: () => {
                const rotation = gsap.getProperty(".dotSvg", "rotation");
                const offset = 308 - (rotation / 360) * 308;
                gsap.set(".circle2", { strokeDashoffset: offset });
            }
        });

        timeline.to(".counter", {
            innerHTML: 2,
            snap: { innerHTML: 1 },
            duration: 4.8,
            ease: "power2.easeInOut",
        });

        timeline.to(".opac", {
            duration: 4.8,
            opacity: 1,
            ease: "power2.easeInOut",
        });

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <div
            ref={seatsRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-screen flex justify-center items-center relative"
        >
            {/* Custom Cursor */}
            <div
                aria-hidden="true"
                ref={cursor}
                className="absolute pointer-none z-20" // Make sure it's positioned absolutely
                style={{
                    transform: 'translate(-50%, -50%) scale(0)', // Centering and initially hidden
                    opacity: 0,
                    width: '98px',  // Adjust as necessary
                    height: '98px', // Adjust as necessary
                }}
            >
                <div className="absolute inset-0 bg-[#0E0E0E] text-[#FFFCF1] flex items-center justify-center rounded-full transform rotate-[-45deg]">
                    <span className="text-[16px]"><span>Take One!</span></span>
                </div>
            </div>

            {/* SVG Elements */}
            <svg className="w-[40%] absolute z-10 rotate-[-90deg]" viewBox="0 0 100 100">
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
            </svg>

            <svg className="w-[40%] absolute z-10 rotate-[135deg] dotSvg" viewBox="0 0 100 100">
                <circle cx="50" cy="1" r="1" fill="#fff" />
            </svg>

            <video
                className="w-[70%] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                muted
                src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"
            />

            <div className="opac opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="text-6xl font-normal flex items-center">
                    <span className="counter">5</span>&nbsp;
                    <span>seats</span>
                </div>
                <h3 className="text-2xl text-white">available for 2024</h3>
            </div>
        </div>
    );
};

export default Seats;
