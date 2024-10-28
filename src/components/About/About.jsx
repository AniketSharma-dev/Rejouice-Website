import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    const about = useRef(null)
    const textRefs = useRef([])

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };
    // useEffect(() => {
    //     // Setup GSAP animation
    //     gsap.from(textRefs.current, {
    //         y: 120, // Start 20px below its final position (this can be adjusted)
    //         stagger: 0.2,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: about.current,
    //             start: "top 47%",
    //             end: "top 37%",
    //             markers: true,
    //             scrub: 2,
    //         }
    //     });
    // }, []);



    return (
        <div ref={about} className="w-full h-screen flex flex-col justify-start items-center px-11 py-20 select-none">
            <div className=" w-full flex justify-between items-center text-[1.6rem] leading-5 border-b border-black mb-2 pb-6  ">
                <h4 className="" ref={addToRefs}>Tomorrow’s Brands, Today™</h4>
                <h4 className="" ref={addToRefs}>Paris / San Diego</h4>
            </div>
            <div className=" pt-1 text-[4.1rem] tracking-[-0.013em]  leading-[1.07] overflow-hidden">
                <p ref={addToRefs} className="">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use the power of
                    narrative, design & technology to transform founder's visions into
                    remarkable brands. We focus on premium, luxury and tech brands. We
                    also offer two engagement models, Agency & Venture. Your vision, your
                    choice.
                </p>
            </div>
        </div>
    );
};

export default About;
