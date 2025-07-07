import StretchedText from "@/components/StretchedText";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto md:px-10 px-5 py-24 flex flex-col relative overflow-hidden">
      <div className="w-full flex justify-between h-auto gap-4 items-center mb-1 px-[2px] fontMain6 uppercase sm:text-base text-xs opacity-85">
        <span>All Rights Reserved</span>
        <span>Copyright © 2025</span>
      </div>
      <StretchedText text={"NAUMENKO"} />

      <Image
        src={"/grass.png"}
        alt="grass"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute 2xl:bottom-[-330px] xl:bottom-[-230px] lg:bottom-[-130px] md:bottom-[-130px] sm:bottom-[-40px] bottom-[-0px] left-0 w-full h-auto"
      />
      <Image
        src={"/grass.png"}
        alt="grass"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute 2xl:bottom-[-320px] xl:bottom-[-220px] lg:bottom-[-120px] md:bottom-[-120px] sm:bottom-[-40px] bottom-[15px] left-0 w-full h-auto blur-xl z-[-1]"
      />
    </div>
  );
};

export default Footer;
