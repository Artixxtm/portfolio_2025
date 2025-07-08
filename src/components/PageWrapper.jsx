"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Header = dynamic(() => import("@/sections/Header"), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });
const About = dynamic(() => import("@/sections/About"), { ssr: false }); 
const Footer = dynamic(() => import("@/sections/Footer"), { ssr: false }); 

const PageWrapper = () => {
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowOther(true), 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Header />
      {showOther && (
        <>
          <Projects />
          <About />
          <Footer />
        </>
      )}
    </>
  );
};

export default PageWrapper;
