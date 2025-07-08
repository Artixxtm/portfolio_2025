'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageLoader = ({ src, alt, className, containerStyles, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${containerStyles ? containerStyles : ''}`}>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`!absolute inset-0 bg-[#4e4e4e] animate-pulse ${className}`}
        ></motion.div>
      )}

      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        onLoad={() => setIsLoaded(true)}
        className={`${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageLoader;
