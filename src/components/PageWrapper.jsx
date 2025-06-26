import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Header = dynamic(() => import("@/sections/Header"), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });

const PageWrapper = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowProjects(true), 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
        <Header />
        <Projects />
    </>
  );
};

export default PageWrapper;
