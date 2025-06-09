"use client"

import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

const Header = () => {
  const {isTablet} = useResponsive();

  return (
    <>
      <div
        className={`w-full md:px-10 px-5 h-screen relative flex flex-col justify-between overflow-hidden`}
        id="header"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full z-[4] mix-blend-difference overflow-hidden">
          <Image
            src="/logoRender.png"
            width={0}
            height={0}
            alt="bg"
            sizes="100vw"
            draggable={false}
            className="w-auto lg:h-[55vh] md:h-[45vh] h-[35vh] object-contain customShadow animateBreath lg:pointer-events-auto pointer-events-none"
          />
        </div>
        {/* TEXT */}
        <div className="flex w-full h-full relative justify-between lg:flex-row flex-col py-24">
          <div
            className={`relative lg:w-fit w-full textHeadLeft h-auto z-[2] flex flex-col justify-center text-[#fff] xl:text-6xl lg:text-5xl md:text-4xl text-3xl tracking-tighter !leading-[115%] lg:mt-[-2rem] mt-[-2px]`}
          >
            <h2 className="mainFont2 uppercase scale-y-[1.1]">Talented</h2>
            <h2 className="mainFont2 uppercase scale-y-[1.1]">
              Developer with
            </h2>
          </div>

          <div
            className={`absolute lg:right-7 !lg:left-0 lg:top-[38%] md:top-[calc(6rem+82px+35px)] top-[calc(5rem+82px+20px)] lg:-translate-y-1/2 w-full lg:max-w-[300px] md:max-w-[280px] max-w-[240px] uppercase lg:text-lg md:text-base text-sm z-[6] fontMain6 opacity-80`}
          >
            <p>
              Hi! I am Artem, Frontend, Game and Mobile Developer. I am up for
              everything, so feel free to ask.
            </p>
          </div>

          <div
            className={`absolute lg:left-7 right-0 lg:bottom-[38%] md:bottom-[calc(6rem+82px+35px)] bottom-[calc(5rem+82px+25px)] text-[rgb(255,255,255,.75)] chipsHeader lg:translate-y-1/2 flex lg:flex-row flex-col lg:items-center items-end lg:gap-4 gap-2 uppercase lg:text-lg md:text-base text-sm z-[6] fontMain5`}
          >
            <a
              href=""
              download
              className="bg-[rgb(25,25,25,.75)] w-fit px-5 py-2 rounded-full flex lg:flex-row flex-row-reverse items-center leading-[100%] backdrop-blur-sm z-[6]"
            >
              <span className="md:w-[9px] w-[7px] md:h-[9px] h-[7px] lg:mr-2 lg:ml-0 mr-0 ml-2 relative bg-[#99ff59] rounded-sm" />{" "}
              <span className="relative top-[2px]">Download {!isTablet ? "my" : ""} CV</span>
            </a>
            <p className="bg-[rgb(25,25,25,.75)] w-fit px-5 py-2 rounded-full flex lg:flex-row flex-row-reverse items-center leading-[100%] backdrop-blur-sm z-[6]">
              <span className="md:w-[9px] w-[7px] md:h-[9px] h-[7px] lg:mr-2 lg:ml-0 mr-0 ml-2 relative bg-[#fff947] rounded-sm" />{" "}
              <span className="relative top-[2px]">Doubt is a killer</span>
            </p>
          </div>

          <div
            className={`relative lg:w-fit w-full textHeadRight h-auto z-[2] xl:mt-[calc(6rem+10px)] lg:mt-[4.84rem] flex flex-col justify-center text-[#fff] xl:text-6xl lg:text-5xl md:text-4xl text-3xl tracking-tighter !leading-[115%] text-right`}
          >
            <h2 className="mainFont2 uppercase scale-y-[1.1]">
              Modern Designs
            </h2>
            <h2 className="mainFont2 uppercase scale-y-[1.1]">and crafts</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
