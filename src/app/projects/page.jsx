"use client";

import DecryptedText from "@/components/DecryptedText";
import { projects } from "@/utils";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const Page = () => {
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    lenis?.scrollTo(0);
  }, []);

  return (
    <div className="w-full min-h-svh md:px-10 px-5 py-24 relative flex flex-col gap-10">
      <div className="flex w-full items-start gap-1">
        <DecryptedText
          text="Projects"
          animateOn="view"
          parentClassName="mainFont2 uppercase xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
          delay={0.1}
          appear
        />
        <DecryptedText
          text={`(${projects.length})`}
          animateOn="view"
          parentClassName="fontMain6 text-base"
          delay={0.13}
          appear
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full h-auto relative grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10"
      >
        {[...projects].reverse().map((project) => (
          <ProjectCard data={project} key={project.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Page;
