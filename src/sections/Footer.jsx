import DecryptedText from "@/components/DecryptedText";
import StretchedText from "@/components/StretchedText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full sm:h-screen h-[65vh] md:px-10 px-5 py-24 flex flex-col justify-between relative overflow-hidden">
      <div className="h-auto w-full flex sm:flex-row flex-col justify-between relative sm:gap-4 gap-5 items-center">
        <DecryptedText
          text={"Open for Opportunities"}
          animateOn="view"
          parentClassName="mainFont2 text-3xl lg:max-w-[400px] max-w-[300px] sm:text-left text-center"
        />
        <div className="flex sm:flex-col flex-row-reverse sm:gap-2 gap-8 w-auto h-auto fontMain6 items-center">
          <div className="relative flex items-center gap-1.5 text-xs w-fit text-right">
            <span className="flex-shrink-0 bg-[#99ff59] animate-pulse w-[6px] h-[6px] rounded-[1px] relative top-[-1px]" />
            <span className="opacity-85">Available for work</span>
          </div>
          <a href="mailto:officalwoolf@gmail.com" target="_blank" className="px-5 py-1 bg-white rounded-full w-fit text-black text-base hover:bg-[rgb(25,25,25,.75)] hover:text-white/85 active:scale-90 border-[1px] border-white/10 transition-[color,background,scale,transform] duration-300">
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex w-full h-auto items-center justify-between fontMain6 opacity-90 flex-wrap">
        <Link target="_blank" className="hover:opacity-60 transition-opacity duration-300" href="https://www.linkedin.com/in/artixx/">[ LinkedIn ]</Link>
        <Link target="_blank" className="hover:opacity-60 transition-opacity duration-300" href="https://www.instagram.com/artixxtm/">[ Instagram ]</Link>
        <Link target="_blank" className="hover:opacity-60 transition-opacity duration-300" href="https://t.me/artixxtm/">[ Telegram ]</Link>
        <Link target="_blank" className="hover:opacity-60 transition-opacity duration-300" href="https://github.com/Artixxtm/">[ GitHub ]</Link>
      </div>
      <div className="flex flex-col w-full h-auto">
        <div className="w-full flex justify-between h-auto gap-4 items-center mb-1 px-[4px] fontMain6 uppercase sm:text-base text-xs opacity-85">
          <span>All Rights Reserved</span>
          <span>Copyright © 2025</span>
        </div>
        <StretchedText text={"NAUMENKO"} />
      </div>

      <Image
        src={"/grass.png"}
        alt="grass"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute 2xl:bottom-[-330px] xl:bottom-[-230px] lg:bottom-[-130px] md:bottom-[-130px] sm:bottom-[-40px] bottom-[-0px] left-0 w-full h-auto pointer-events-none z-[1002]"
      />
      <Image
        src={"/grass.png"}
        alt="grass"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute 2xl:bottom-[-320px] xl:bottom-[-220px] lg:bottom-[-120px] md:bottom-[-120px] sm:bottom-[-40px] bottom-[15px] left-0 w-full h-auto blur-xl z-[-1] pointer-events-none"
      />
    </footer>
  );
};

export default Footer;
