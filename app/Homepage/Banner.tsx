"use client";
import MiniBanner from "@/app/common/components/MiniBanner";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <>
      <div className="w-full h-screen relative justify-center">
        {/* <video
          className="w-full h-screen object-cover"
          autoPlay
          muted
          loop
          preload="none"
        >
          <source src="/Hapusa.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video> */}
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <div>
              <Image
                src={"/home/bg2.jpeg"}
                width={1000}
                height={1000}
                alt="hello"
                className="w-full h-screen object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Ensure MiniBanner has a specific position or z-index */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="">
        <MiniBanner />
      </div>
    </>
  );
};

export default Banner;
