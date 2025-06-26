'use client';

import React, { useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText";

const LinkButton = ({ text, link, download, dotColor, disabled }) => {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Audio("/sfx/hover.mp3");
    soundRef.current.volume = 0.4;
  }, []);

  const handleMouseEnter = () => {
    soundRef.current.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });
  };

  return (
    <>
      {disabled ? (
        <p
          onMouseEnter={handleMouseEnter}
          className="bg-[rgb(25,25,25,.75)] relative w-full pt-[1px] lg:max-w-[191px] md:max-w-[176.2px] max-w-max px-5 rounded-full inline-flex lg:flex-row flex-row-reverse items-center group leading-[100%] backdrop-blur-sm z-[6] select-none cursor-default overflow-hidden whitespace-nowrap"
        >
          <span
            style={{ background: dotColor }}
            className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] group-hover:w-[100%] group-hover:h-[100%] lg:group-hover:left-0 group-hover:right-0 absolute lg:left-[20px] right-[20px] top-1/2 -translate-y-1/2 rounded-sm transition-[height,width,left,border-radius,right] duration-300 group-hover:rounded-full"
          />{" "}
          <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] absolute lg:left-[20px] right-[20px] top-1/2 scale-0 group-hover:scale-100 -translate-y-1/2 bg-black rounded-sm transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:animate-pulse opacity-90" />
          <DecryptedText
            text={`Doubt is a killer`}
            animateOn="hover"
            parentClassName="relative lg:h-[34px] md:h-[31px] h-[26px] leading-[200%] !whitespace-nowrap lg:pl-[calc(0.5rem+9px)] w-full lg:pr-0 pl-0 md:pr-[calc(0.5rem+9px)] pr-[calc(0.5rem+7px)] group-hover:text-black transition-colors"
          />
        </p>
      ) : (
        <a
          href={link}
          download={download}
          onMouseEnter={handleMouseEnter}
          className="bg-[rgb(25,25,25,.75)] w-full pt-[1px] lg:max-w-[190px] md:max-w-[152px] max-w-max px-5 rounded-full flex lg:flex-row flex-row-reverse items-center leading-[100%] backdrop-blur-sm z-[6] overflow-hidden whitespace-nowrap group"
        >
          <span
            style={{ background: dotColor }}
            className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] group-hover:w-[100%] group-hover:h-[100%] lg:group-hover:left-0 group-hover:right-0 absolute lg:left-[20px] right-[20px] top-1/2 -translate-y-1/2 rounded-sm transition-[height,width,left,border-radius,right] duration-300 group-hover:rounded-full"
          />
          <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] absolute lg:left-[20px] right-[20px] top-1/2 scale-0 group-hover:scale-100 -translate-y-1/2 bg-black rounded-sm transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:animate-pulse opacity-90" />
          <DecryptedText
            text={text}
            animateOn="hover"
            parentClassName="relative lg:h-[34px] md:h-[31px] h-[26px] leading-[200%] !whitespace-nowrap lg:pl-[calc(0.5rem+9px)] w-full lg:pr-0 pl-0 md:pr-[calc(0.5rem+9px)] pr-[calc(0.5rem+7px)] group-hover:text-black transition-colors"
          />
        </a>
      )}
    </>
  );
};

export default LinkButton;
