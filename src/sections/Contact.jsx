"use client";

import DecryptedText from "@/components/DecryptedText";
import ParallaxImage from "@/components/ParallaxImage";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-[75vh] md:px-10 px-5 py-24 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="h-[500px] w-[90%] bg-[rgba(135,135,135,0.15)] customClipWrapper2 backdrop-blur-md relative flex justify-center items-center">
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="-0.5 -0.5 101 101"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,100 0,20 5,0 99.5,0 99.5,80 94.5,100"
            fill="none"
            stroke="rgba(135,135,135,0.2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* <ParallaxImage src={'/bgg.jpg'} alt="gl" width={0} height={0} sizes="100vw" className="absolute inset-0 w-full h-full object-cover" /> */}

        <div className="flex flex-col items-center sm:gap-10 gap-8 w-auto h-auto relative z-[2]">
          <DecryptedText
            text={"Open for Opportunities"}
            animateOn="view"
            parentClassName="mainFont2 xl:text-6xl md:text-5xl text-3xl lg:max-w-[700px] sm:max-w-[400px] text-center"
          />
          <button className="fontMain6 px-5 py-2 bg-white rounded-full w-fit text-black sm:text-lg text-base">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
