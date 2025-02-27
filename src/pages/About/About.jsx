import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const about = useRef(null);
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
                trigger: about.current,
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
                trigger: about.current,
                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            },
        }
        );
    }, []);



    return (
        <div ref={about} className="w-full h-screen flex flex-col justify-start items-center px-11 py-20 select-none">
            <div className="w-full flex justify-between items-center text-[1.6rem] mb-2 overflow-hidden">
                <h4 className="translate-y-full" ref={addToLineRefs}>Tomorrow’s Brands, Today™</h4>
                <h4 className="translate-y-full" ref={addToLineRefs}>Paris / San Diego</h4>
            </div>

            {/* Animated line */}
            <div ref={lineRef} className="w-0 h-[1px] my-2 bg-black "></div>

            {/* Divided Paragraph for Line Animation */}
            <div className="pt-1 text-[4.1rem] tracking-[-0.013em] leading-[1.07] overflow-hidden">
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use the power of narrative, design &
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    technology to transform founder's visions into
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    remarkable brands. We focus on premium, luxury
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    and tech brands. We also offer two engagement
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    models, Agency & Venture. Your vision, your
                </p>
                <p ref={addToLineRefs} className="translate-y-full opacity-0">
                    choice.
                </p>
            </div>
        </div>
    );
};

export default About;
