import DecryptedText from "@/components/DecryptedText";
import { aboutInfo } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-full min-h-screen relative bg-black md:px-10 px-5 py-24 flex xl:flex-row flex-col justify-between items-start xl:gap-0 md:gap-10 gap-0">
      <div className="xl:w-auto w-full xl:max-w-[40vw] h-auto pt-2 flex flex-col gap-20">
        <div className="flex flex-col gap-5 relative">
          <DecryptedText
            text={aboutInfo[0].title}
            animateOn="view"
            parentClassName="mainFont2 xl:text-5xl md:text-4xl text-3xl"
          />
          <p className="fontMain6 xl:text-lg sm:text-base text-sm uppercase opacity-85 mt-1">
            {aboutInfo[0].description}
          </p>
          <div className="fontMain6 inline-flex gap-6 sm:text-base text-sm uppercase opacity-95 mt-1">
            <span className="inline-flex gap-2 items-center">
              Based in{" "}
              <Image
                src={"/assets/pl.png"}
                width={18}
                height={18}
                alt="PL flag"
                className="object-contain"
              />
            </span>{" "}
            <span className="inline-flex gap-2 items-center">
              originally from{" "}
              <Image
                src={"/assets/ua.png"}
                width={18}
                height={18}
                alt="UA flag"
                className="object-contain"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 relative">
          <DecryptedText
            text={aboutInfo[1].title}
            animateOn="view"
            parentClassName="mainFont2 xl:text-5xl md:text-4xl text-3xl"
          />

          <div className="w-full h-full flex flex-col gap-1.5 mt-2">
            {aboutInfo[1].jobs.map((job, index) => (
              <React.Fragment key={index}>
                <Link
                  href={job.link}
                  target="_blank"
                  className="flex w-full justify-between items-center h-[74px] fontMain6 relative group customClipRightTop"
                >
                  <div className="flex w-auto h-auto gap-3 items-center relative z-[1] sm:pl-2 pl-0">
                    <div className="w-auto h-auto overflow-hidden border-[1px] border-[rgba(135,135,135,0.15)]">
                      <Image
                        src={job.logo}
                        width={45}
                        height={45}
                        alt={job.company}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-auto h-full relative flex flex-col leading-[100%]">
                      <b className="sm:text-base text-sm">{job.position}</b>
                      <p className="sm:text-sm text-xs opacity-85">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className="h-full w-auto flex items-center justify-center opacity-75 sm:pr-2 pr-0 sm:text-base text-xs">
                    <span>{job.date}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[rgba(135,135,135,0.15)] group-hover:h-full transition-[height] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-[0]" />
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 relative">
          <DecryptedText
            text={aboutInfo[2].title}
            animateOn="view"
            parentClassName="mainFont2 xl:text-5xl md:text-4xl text-3xl"
          />
          <div className="w-full h-full flex flex-wrap gap-1.5 mt-2">
            {aboutInfo[2].stack.map((item, index) => (
              <div
                className="w-fit sm:h-[30px] h-[25px] bg-[rgba(135,135,135,0.2)] flex items-center sm:text-base text-sm justify-center gap-2 fontMain5 px-3 rounded-full"
                key={index}
              >
                {item.icon}{" "}
                <span className="relative top-[1px]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-auto xl:max-w-[40vw] xl:h-[calc(100vh-12rem)] h-auto pt-4 xl:sticky xl:top-20 relative xl:mt-0 mt-10 xl:mx-0 mx-auto">
        <Image
          src={"/me-1.jpg"}
          alt="Artem Naumenko"
          sizes="100vw"
          width={0}
          height={0}
          className="h-full w-auto object-contain customClipLeftBottom"
        />
      </div>
    </div>
  );
};

export default About;
