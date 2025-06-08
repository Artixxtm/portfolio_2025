import Image from "next/image";
import React, { useEffect, useState } from "react";
import AudioVisualizer from "./AudioVisualizer";

const Nav = () => {
  return (
    <>
      <nav
        className={`fixed left-0 w-full h-[80px] bottom-8 flex customTransitionShow2 justify-between z-[100] px-10 fontMain5 mix-blend-difference`}
      >
        <div className="w-full flex flex-col items-start justify-end fontMain5">
          <a href="#">From</a>
          <a href="#">Poland</a>
        </div>

        <div className="w-full flex items-end justify-center uppercase h-full gap-8 fontMain6">
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
        className={`fixed left-0 w-full h-[80px] top-8 flex customTransitionShow2 justify-between z-[100] px-10 fontMain5 mix-blend-difference`}
      >
        <div className="flex w-full gap-8">
          <div className="flex flex-col">
            <a href="https://www.instagram.com/artixxtm/" target="_blank">
              Instagram
            </a>
            <a href="https://t.me/artixxtm/" target="_blank">
              Telegram
            </a>
          </div>
          <a href="mailto:officalwoolf@gmail.com" target="_blank">
            officalwoolf@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="fontMain6">Artem Naumenko</h2>
          <p>Artixx™</p>
        </div>
        <div className="flex w-full justify-end gap-8">
          <p>open for freelance \ work</p>
          <div className="flex flex-col text-right">
            <a href="https://www.linkedin.com/in/artixx/" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Artixxtm/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
