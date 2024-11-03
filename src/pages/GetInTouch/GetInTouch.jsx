import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import AboutLink from "../../components/AboutLink";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
    const strategy = useRef(null);
    const lineRefs = useRef([]);
    const lineRef = useRef(null);

    // Array of image sources
    const images = [
        "https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048",
        "https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048",
        "https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048",
        "https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048",
        "https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048",
    ];

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
        });
    }, []);

    return (
        <div ref={strategy} className="w-full min-h-screen flex flex-col justify-start items-center px-11 py-20 select-none">
            <div className="w-full flex justify-between items-end text-[1.6rem] mb-2 overflow-hidden">
                <h2 ref={addToLineRefs} className="translate-y-full text-[8.1rem] font-medium">Get in touch.</h2>
                <h2 ref={addToLineRefs} className="translate-y-full cursor-pointer">
                    <span className="text-black -scale-x-100 text-3xl mr-2 font-thin inline-block">↵</span>{" "}
                     <b className="font-thin hover-underline-animation left after:bg-black after:h-[1px]">
                    Contact
                     </b>
                </h2>
            </div>

            {/* Animated line */}
            <div ref={lineRef} className="w-0 h-[1px] my-2 bg-black "></div>

            <Swiper
                slidesPerView={4}   // Show 4 slides at a time
                spaceBetween={25}    // Space between slides
                loop={true} // Enable infinite loop
                grabCursor={true}
                autoplay={{          // Enable autoplay
                    delay: 1000,     // Delay between transitions in milliseconds
                    disableOnInteraction: false, // Autoplay continues after user interactions
                }}
                modules={[Autoplay]}
                className="mySwiper w-full flex items-end justify-center relative -top-20  "
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>  {/* Ensure the slide takes full height and aligns items at the bottom */}
                        <img src={src} alt={`Slide ${index + 1}`} className="w-[400px] h-auto object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
           <AboutLink/>
        </div>
    );
};

export default Strategy;
