"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import { projects } from "@/utils";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const gridImages = grid.querySelectorAll(".grid__img");
    const gridItems = grid.querySelectorAll(".grid__item");

    const instance = imagesLoaded(gridImages);

    instance.on("done", () => {
      console.log("loaded");
      document.body.classList.remove("loading");
      grid.classList.remove("opacity-0", "pointer-events-none");

      gsap
        .timeline({
          defaults: { ease: "power3" },
          scrollTrigger: {
            trigger: grid,
            start: "center 100%",
            end: "+=200%",
            // pin: grid,
            scrub: 0.2,
          },
        })
        .from(gridImages, {
          stagger: 0.06,
          y: window.innerHeight,
          rotation: () => gsap.utils.random(-15, 15),
          transformOrigin: "50% 0%",
        })
        .fromTo(
          gridImages,
          { filter: "brightness(100%)" },
          {
            ease: "none",
            stagger: 0.06,
            filter: (pos) =>
              pos < gridImages.length - 1
                ? "brightness(20%)"
                : "brightness(100%)",
          },
          0
        )
        .from(
          gridItems,
          {
            xPercent: (pos) => (pos % 2 ? 100 : -100),
            autoAlpha: 0,
          },
          0.06 * gridImages.length
        );

      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div
      className="w-full md:px-10 px-5 min-h-[100svh] relative flex flex-col justify-between"
      id="projects"
    >
      <main>
        <section className="relative min-h-[100dvh] content-center content--full">
          <div className="relative h-[250vh] w-full">
            <div
              ref={gridRef}
              className="opacity-0 pointer-events-none transition-opacity duration-700 ease-in-out sticky top-0 w-full h-auto"
            >
              <div className="grid--custom gap-4 h-[100svh] items-center justify-items-center overflow-hidden">
                {/* Text left */}
                <div
                  className="grid__item max-w-[300px] md:text-left text-center md:justify-self-start self-end md:self-center"
                  style={{ gridArea: "text-left" }}
                >
                  <h4 className="mainFont2 xl:text-5xl md:text-4xl text-3xl">Selected Projects</h4>
                </div>

                {/* Image center */}
                {projects.map(({ src, id, title }, index) => (
                  <Link
                    href={
                      index === projects.length - 1
                        ? "/projects"
                        : `/projects/${title.toLowerCase()}`
                    }
                    key={id + title + "-" + index}
                    className="w-full aspect-[16/9] bg-cover bg-center grid__img cursor-pointer group flex justify-center items-center"
                    style={{
                      gridArea: "image",
                      backgroundImage: `url(${src})`,
                    }}
                  >
                    {index === projects.length - 1 && (
                      <div className="w-[150px] h-[50px] flex justify-center relative items-center text-center scale-[0.3] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-[transform,scale,opacity] ease-[cubic-bezier(1,0.01,0.28,1)] duration-700 uppercase gap-4">
                        <span className="mainFont2 z-[1] text-black">View</span>{" "}
                        <span className="mainFont2 z-[1] text-black inline-flex items-center">All<RiArrowRightUpLine size={18} /></span>
                        <div className="customBtnClip bg-[#fff947] w-full h-full absolute inset-0 z-[-1]"></div>
                      </div>
                    )}
                  </Link>
                ))}

                {/* Text right */}
                <div
                  className="grid__item max-w-[300px] md:text-left text-center md:justify-self-end self-start md:self-center"
                  style={{ gridArea: "text-right" }}
                >
                  <p className="fontMain6 xl:text-lg sm:text-base text-sm uppercase">
                    Built with clean code and solid design, focused on real
                    world functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
