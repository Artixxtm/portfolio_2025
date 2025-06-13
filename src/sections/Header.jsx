"use client";

import DecryptedText from "@/components/DecryptedText";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";

const Header = () => {
  const { isTablet } = useResponsive();

  return (
    <>
      <div
        className={`w-full md:px-10 px-5 h-[100svh] relative flex flex-col justify-between overflow-hidden`}
        id="header"
      >
        {/* <Image src={'/bgg.jpg'} sizes="100vw" width={0} height={0} className="w-[110vw] md:h-[110vw] h-[130vh] object-cover absolute md:top-[-20%] top-0 left-1/2 -translate-x-1/2 z-[-1] opacity-55 scale-x-[-1] object-top" /> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full z-[4] overflow-hidden">
          <Image
            src="/logoRender.png"
            width={0}
            height={0}
            alt="bg"
            sizes="100vw"
            draggable={false}
            className="w-auto lg:h-[55vh] md:h-[45vh] h-[30vh] object-contain customShadow animateBreath lg:pointer-events-auto pointer-events-none"
          />
        </div>
        {/* TEXT */}
        <div className="flex w-full h-full relative justify-between lg:flex-row flex-col py-24">
          <div
            className={`relative lg:w-fit w-full textHeadLeft h-auto z-[2] flex flex-col justify-center text-[#fff] xl:text-6xl lg:text-5xl md:text-4xl text-3xl tracking-tighter !leading-[115%] lg:mt-[-2rem] mt-[-2px]`}
          >
            <DecryptedText
              text="Talented"
              animateOn="view"
              parentClassName="mainFont2 uppercase scale-y-[1.1]"
              delay={0.1}
              appear
            />
            <DecryptedText
              text="Developer with"
              animateOn="view"
              parentClassName="mainFont2 uppercase scale-y-[1.1]"
              delay={0.3}
              appear
            />
          </div>

          <div
            className={`absolute lg:right-7 !lg:left-0 lg:top-[38%] md:top-[calc(6rem+82px+35px)] top-[calc(5rem+82px+20px)] lg:-translate-y-1/2 w-full lg:max-w-[300px] md:max-w-[280px] max-w-[240px] uppercase lg:text-lg md:text-base text-sm z-[6] fontMain6 opacity-80`}
          >
            <p>
              Hi! I am Artem, Fullstack Developer. 4+ years of expirience. I am
              up for everything, so feel free to ask.
            </p>
          </div>

          <div
            className={`absolute lg:left-7 right-0 lg:bottom-[38%] md:bottom-[calc(6rem+82px+35px)] bottom-[calc(5rem+82px+25px)] text-[rgb(255,255,255,.75)] chipsHeader lg:translate-y-1/2 flex lg:flex-row flex-col lg:items-center items-end lg:gap-4 gap-2 uppercase lg:text-lg md:text-base text-sm z-[6] fontMain5`}
          >
            <a
              href=""
              download
              className="bg-[rgb(25,25,25,.75)] w-full pt-[1px] lg:max-w-[190px] md:max-w-[152px] max-w-max px-5 rounded-full flex lg:flex-row flex-row-reverse items-center leading-[100%] backdrop-blur-sm z-[6] overflow-hidden whitespace-nowrap group"
            >
              <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] group-hover:w-[100%] group-hover:h-[100%] lg:group-hover:left-0 group-hover:right-0 absolute lg:left-[20px] right-[20px] top-1/2 -translate-y-1/2 bg-[#99ff59] rounded-sm transition-[height,width,left,border-radius,right] duration-300 group-hover:rounded-full" />
              <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] absolute lg:left-[20px] right-[20px] top-1/2 scale-0 group-hover:scale-100 -translate-y-1/2 bg-black rounded-sm transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:animate-pulse opacity-90" />
              <DecryptedText
                text={`Download ${!isTablet ? "my" : ""} CV`}
                animateOn="hover"
                parentClassName="relative lg:h-[34px] md:h-[31px] h-[26px] leading-[200%] !whitespace-nowrap lg:pl-[calc(0.5rem+9px)] w-full lg:pr-0 pl-0 md:pr-[calc(0.5rem+9px)] pr-[calc(0.5rem+7px)] group-hover:text-black transition-colors"
              />
            </a>
            <p className="bg-[rgb(25,25,25,.75)] relative w-full pt-[1px] lg:max-w-[191px] md:max-w-[176.2px] max-w-max px-5 rounded-full inline-flex lg:flex-row flex-row-reverse items-center group leading-[100%] backdrop-blur-sm z-[6] select-none cursor-default overflow-hidden whitespace-nowrap">
              <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] group-hover:w-[100%] group-hover:h-[100%] lg:group-hover:left-0 group-hover:right-0 absolute lg:left-[20px] right-[20px] top-1/2 -translate-y-1/2 bg-[#fff947] rounded-sm transition-[height,width,left,border-radius,right] duration-300 group-hover:rounded-full" />{" "}
              <span className="flex-shrink-0 md:w-[10px] w-[7px] md:h-[10px] h-[7px] absolute lg:left-[20px] right-[20px] top-1/2 scale-0 group-hover:scale-100 -translate-y-1/2 bg-black rounded-sm transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:animate-pulse opacity-90" />
              <DecryptedText
                text={`Doubt is a killer`}
                animateOn="hover"
                parentClassName="relative lg:h-[34px] md:h-[31px] h-[26px] leading-[200%] !whitespace-nowrap lg:pl-[calc(0.5rem+9px)] w-full lg:pr-0 pl-0 md:pr-[calc(0.5rem+9px)] pr-[calc(0.5rem+7px)] group-hover:text-black transition-colors"
              />
            </p>
          </div>

          <div
            className={`relative lg:w-fit w-full textHeadRight h-auto z-[2] xl:mt-[calc(6rem+10px)] lg:mt-[4.84rem] flex flex-col justify-center text-[#fff] xl:text-6xl lg:text-5xl md:text-4xl text-3xl tracking-tighter !leading-[115%] text-right`}
          >
            <DecryptedText
              text="Modern Designs"
              animateOn="view"
              revealDirection="center"
              parentClassName="mainFont2 uppercase scale-y-[1.1]"
              delay={0.1}
              appear
            />
            <DecryptedText
              text="And Crafts"
              animateOn="view"
              revealDirection="center"
              parentClassName="mainFont2 uppercase scale-y-[1.1]"
              delay={0.3}
              appear
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
