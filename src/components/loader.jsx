import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const Loader = ({ isLoading }) => {
    const overlapRef = useRef(null);
    const textRef = useRef([]);


    useEffect(() => {
        if (isLoading) {
            const tl = gsap.timeline();

            // Animate each word with stagger and fade
            tl.fromTo(
                textRef.current,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.easeOut",
                    stagger: 0.3, // adds delay between each word
                }
            ).to(
                textRef.current,
                {
                    x: -31,
                    opacity: 0,
                    duration: .8,
                    ease: "power3.out",
                    stagger: 0.2,
                },
                "-=0.8" // overlap this with previous animation
            ).to(
                overlapRef.current,
                {
                    opacity: 0,
                    duration: 1,
                    delay: .5,
                    ease: "power3.easeInOut",
                },
            )
        }
    }, [isLoading]);

    return (
        isLoading && (
            <div ref={overlapRef} className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
                <div className="loader  text-white text-2xl overflow-hidden">
                    <div className="flex space-x-2">
                        {["Tomorrow's", "Brands,", "Today.™"].map((word, index) => (
                            <span
                                key={index}
                                ref={(el) => (textRef.current[index] = el)}
                                className="inline-block translate-x-full"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default Loader;
