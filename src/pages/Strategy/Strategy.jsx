import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
    const strategy = useRef(null);
    const lineRefs = useRef([]);
    const lineRef = useRef(null);

    // Function to collect references for each line
    const addToLineRefs = (el) => {
        if (el && !lineRefs.current.includes(el)) {
            lineRefs.current.push(el);
        }
    };

    useEffect(() => {
        // GSAP animation for each line in the paragraph
        gsap.to(lineRefs.current, {
            y: "0%",      // Start from below
            opacity: 1,   // Fade in effect
            stagger: 0.2, // Staggered animation for each line
            duration: 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
                trigger: strategy.current,
                start: "top 70%", // Start animation when section reaches 70% of viewport height
                end: "top 50%",   // End animation at 50%
                scrub: 2,         // Smooth scrolling effect
            },
        });


        // GSAP animation for lines
        gsap.to(lineRef.current, {
            width: "100%",
            duration: 1,
            ease: Expo.easeInOut,
            scrollTrigger: {
                trigger: strategy.current,
                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        }
        );
    }, []);



    return (
        <div ref={strategy} className="w-full min-h-screen flex flex-col justify-start items-center px-11 py-20 select-none">
            <div className="w-full flex justify-start items-center text-[1.6rem] mb-2 overflow-hidden">
                <h4 className="translate-y-full" ref={addToLineRefs}>Strategy & emotion.<br />You need both.</h4>
            </div>

            {/* Animated line */}
            <div ref={lineRef} className="w-0 h-[1px] my-2 bg-black "></div>

            {/* Divided Paragraph for Line Animation */}
            <div className="pt-1 text-[4.1rem] tracking-[-0.013em] leading-[1.07] overflow-hidden">
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data matters, but the real challenge lies in
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                forging an emotional connection between your
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                brand and your audience. One that drives impact
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                far beyond conversion. We don’t believe in ‘one
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                size fits all.’ We craft unique brand experiences
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                that deeply resonate with your audience and
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                boost your KPIs.
                </p>
            </div>
        </div>
    );
};

export default Strategy;
