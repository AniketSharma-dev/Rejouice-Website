import React, { useRef } from "react";
import Img1 from "../../assets/images/img1.avif";
import Img2 from "../../assets/images/img2.avif";
import Img3 from "../../assets/images/img3.avif";
import Video1 from "../../assets/Video/Website-homepage-Work-01_1.mp4";
import Video2 from "../../assets/Video/Website-homepage-Work-02_1.mp4";
import Video3 from "../../assets/Video/Website-homepage-Work-03_1.mp4";

const ServiceCards = () => {
    // Array of video and image data
    const mediaData = [
        { imgSrc: Img1, videoSrc: Video1, },
        { imgSrc: Img2, videoSrc: Video2, },
        { imgSrc: Img3, videoSrc: Video3, },
    ];

    // Array to hold refs for each video
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.currentTime = 0; // Reset video to the start
            video.play();          // Start playing
        }
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();         // Pause video on mouse leave
            video.currentTime = 0; // Reset video to the start
        }
    };

    return (
        <div className="w-full h-screen p-[3vw]">
            <div className="flex justify-between items-center text-2xl py-2">
                <h2>Transforming visions into brands.</h2>
                <h2>
                    <span className="text-black -scale-x-100 text-3xl mr-2 font-thin inline-block">
                        ↵
                    </span>{" "}
                    See the work
                </h2>
            </div>
            <div className="w-full h-full flex justify-center items-center gap-4">
                {mediaData.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className={`hoverEffect w-full h-full relative`}
                    >
                        <img className="absolute z-10" src={item.imgSrc} alt={`Image ${index + 1}`} />
                        <video
                            ref={(el) => (videoRefs.current[index] = el)} // Assign ref to each video
                            className="absolute"
                            muted
                            src={item.videoSrc}
                        ></video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
