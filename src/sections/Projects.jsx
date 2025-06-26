"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import { projects } from "@/utils";

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
                  <h4 className="type-tiny">Craft</h4>
                  <p>
                    His craft reveals the quiet beauty in life’s fleeting
                    moments.
                  </p>
                </div>

                {/* Image center */}
                {projects.map(({src, id, title}) => (
                  <div
                    key={id}
                    className="w-full aspect-[16/9] bg-cover bg-center grid__img"
                    style={{
                      gridArea: "image",
                      backgroundImage: `url(${src})`,
                    }}
                  ></div>
                ))}

                {/* Text right */}
                <div
                  className="grid__item max-w-[300px] md:text-left text-center md:justify-self-end self-start md:self-center"
                  style={{ gridArea: "text-right" }}
                >
                  <h4 className="type-tiny">Perspective</h4>
                  <p>
                    His perspective finds depth in stillness, where the unseen
                    speaks.
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
