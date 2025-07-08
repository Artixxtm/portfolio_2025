"use client";

import useResponsive from "@/hooks/useResponsive";
import ImageASCI from "./ImageASCI";
import Image from "next/image";

const ImageHeader = ({ src }) => {
  const { isTablet } = useResponsive();

  return !isTablet ? (
    <ImageASCI src={src} className="w-full h-full relative flex justify-center items-center animateBreath" />
  ) : (
    <Image
      src={src}
      width={0}
      height={0}
      alt="bg"
      sizes="100vw"
      draggable={false}
      priority
      className="w-auto md:h-[45vh] h-[25vh] object-contain customShadow animateBreath lg:pointer-events-auto pointer-events-none"
    />
  );
};

export default ImageHeader;
