"use client"

import useResponsive from "@/hooks/useResponsive";
import dynamic from "next/dynamic";
import React from "react";
import { SiMaildotru, SiFitbit } from "react-icons/si";

const AudioVisualizer = dynamic(() => import("./AudioVisualizer"), {ssr: false});

const Nav = () => {
  const {isTablet} = useResponsive();

  return (
    <>
      <nav
        className={`fixed left-0 w-full h-auto md:bottom-8 bottom-4 flex customTransitionShow2 justify-between z-[100] md:px-10 px-5 fontMain5 mix-blend-difference`}
      >
        <div className="w-full flex flex-col items-start justify-end fontMain5">
          <a href="#">From</a>
          <a href="#">Poland</a>
        </div>

        <div className="w-full lg:flex hidden items-end justify-center uppercase h-full gap-8 fontMain6">
          <div className="flex w-auto items-center justify-center gap-8 bg-[rgb(25,25,25,.75)] border-[1px] border-[#878787]/10 backdrop-blur-md py-4 px-10 rounded-xl">
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Life</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="w-full flex items-end justify-end content-end h-full fontMain5 opacity-90">
          <AudioVisualizer />
        </div>
      </nav>

      <nav
        className={`fixed left-0 w-full h-auto md:top-8 top-4 flex customTransitionShow2 justify-between lg:items-start items-center z-[100] md:px-10 px-5 fontMain5 mix-blend-difference`}
      >
        <div className="flex w-full gap-8">
          <div className="lg:flex hidden flex-col">
            <a href="https://www.instagram.com/artixxtm/" target="_blank">
              Instagram
            </a>
            <a href="https://t.me/artixxtm/" target="_blank">
              Telegram
            </a>
          </div>
          <a href="mailto:officalwoolf@gmail.com" target="_blank">
            {!isTablet ? "officalwoolf@gmail.com" : <SiMaildotru size={26} />}
          </a>
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="fontMain6">Artem Naumenko</h2>
          <p>Artixx™</p>
        </div>
        <div className="flex w-full justify-end gap-8">
          <p className="lg:flex hidden">open for freelance \ work</p>
          <div className="lg:flex hidden flex-col text-right">
            <a href="https://www.linkedin.com/in/artixx/" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Artixxtm/" target="_blank">
              GitHub
            </a>
          </div>
          <button className="h-max lg:hidden flex"><SiFitbit size={26} /></button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
