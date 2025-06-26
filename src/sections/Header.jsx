"use client";

import DecryptedText from "@/components/DecryptedText";
import useResponsive from "@/hooks/useResponsive";
import { motion } from "framer-motion";
import LinkButton from "@/components/LinkButton";
import dynamic from "next/dynamic";
import Image from "next/image";

const ImageHeader = dynamic(() => import("@/components/ImageHeader"), {ssr: false});

const Header = () => {
  const { isTablet } = useResponsive();

  return (
    <>
      <div
        className={`w-full md:px-10 px-5 h-[100svh] relative flex flex-col justify-between overflow-hidden`}
        id="header"
      >
        {/* <Image src={'/bgg.jpg'} sizes="100vw" width={0} height={0} className="w-[110vw] md:h-[110vw] h-[130vh] object-cover absolute md:top-[-20%] top-0 left-1/2 -translate-x-1/2 z-[-1] opacity-55 scale-x-[-1] object-top" /> */}
        <motion.div
          initial={{
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0.6)",
          }}
          animate={{ opacity: 1, transform: "translate(-50%, -50%) scale(1)" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-1/2 left-1/2 flex items-center justify-center w-full h-full z-[4] overflow-hidden mix-blend-difference"
        >
          <ImageHeader src={"/logoRender.png"} />
        </motion.div>
        {/* TEXT */}
        <div className="flex w-full h-full relative justify-between lg:flex-row flex-col py-24">
          <div
            className={`relative lg:w-fit w-full textHeadLeft h-auto z-[2] flex flex-col justify-center text-[#fff] xl:text-6xl lg:text-5xl md:text-4xl text-3xl tracking-tighter !leading-[115%] lg:mt-[-2rem] mt-[-2px] `}
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
              revealDirection="end"
              parentClassName="mainFont2 uppercase scale-y-[1.1]"
              delay={0.3}
              appear
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.8,
            }}
            className={`absolute lg:right-7 !lg:left-0 lg:top-[38%] md:top-[calc(6rem+82px+35px)] top-[calc(5rem+82px+20px)] lg:-translate-y-1/2 w-full lg:max-w-[300px] md:max-w-[280px] max-w-[240px] uppercase lg:text-lg md:text-base text-sm z-[6] fontMain6 opacity-80`}
          >
            <p>
              Hi! I am Artem, Fullstack Developer. 4+ years of expirience. I am
              up for everything, so feel free to ask.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.85,
            }}
            className={`absolute lg:left-7 right-0 lg:bottom-[38%] md:bottom-[calc(6rem+82px+35px)] bottom-[calc(5rem+82px+25px)] text-[rgb(255,255,255,.75)] chipsHeader lg:translate-y-1/2 flex lg:flex-row flex-col lg:items-center items-end lg:gap-4 gap-2 uppercase lg:text-lg md:text-base text-sm z-[6] fontMain5`}
          >
            <LinkButton
              text={`Download ${!isTablet ? "my" : ""} CV`}
              link={"#"}
              download={true}
              dotColor={"#99ff59"}
            />
            <LinkButton
              text={`Doubt is a killer`}
              dotColor={"#fff947"}
              disabled
            />
          </motion.div>

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
