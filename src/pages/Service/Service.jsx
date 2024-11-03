import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCards from './ServiceCards';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const headingRef = useRef([]); // Reference for the headings

    const addToLineRefs = (el) => {
        if (el && !headingRef.current.includes(el)) {
            headingRef.current.push(el);
        }
    };

    useEffect(() => {
        // GSAP animation for the heading
        gsap.fromTo(
            headingRef.current,
            { y: '100%', opacity: 0 }, // Start below and invisible
            {
                y: '0%', // End at normal position
                stagger: 0.3,
                opacity: 1, // Fade in
                duration: 1,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 60%', // Start when heading reaches 60% of viewport
                    end: 'top 45%', // End when heading reaches 45%
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <>
            <div className="w-full min-h-[80vh] relative p-[3vw] flex justify-center items-center flex-col gap-3">
                <div className="text-center flex justify-center items-center gap-4">
                    <h4 className='text-center text-base flex justify-center items-center gap-1'>
                        Agency & Venture <span className="text-center bg-black rounded-full text-[12px] px-[6px]">Models</span>
                    </h4>
                    <span className="text-black -rotate-90 text-xl iblock align-y:middle transform rotate:-90deg">↵</span>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h2 ref={addToLineRefs} className="hover-underline-animation left w-fit  relative overflow-hidden pb-2 text-black text-7xl">Explore Our Service</h2>
                    <h2 ref={addToLineRefs} className="hover-underline-animation left w-fit  relative overflow-hidden pb-2 text-black text-7xl">& Engagement Models</h2>
                </div>
            </div>
            <ServiceCards />
        </>
    );
};

export default Service;
