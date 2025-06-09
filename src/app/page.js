"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "../libs/lenis";
import useRandom from "@/hooks/useRandom";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/Nav"), {ssr: false});
const Header = dynamic(() => import("@/sections/Header"), {ssr: false});

gsap.registerPlugin(ScrollTrigger);

function percentageVideo(partialValue, totalValue) {
  return partialValue / totalValue;
}

const layouts = [
  {
    name: "first layout",
  },
  {
    name: "second layout",
  },
  {
    name: "third layout",
  },
];

export default function Home() {
  const lenisRef = useRef();

  
  // const { local, result } = useRandom(layouts);

  useEffect(() => {
    ScrollTrigger.clearScrollMemory("manual");
    ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollTrigger.normalizeScroll(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.ticker.add((time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () =>
      gsap.ticker.remove((time) => {
        lenisRef.current?.lenis?.raf(time * 1000);
      });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

    })

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <ReactLenis
        root
        ref={lenisRef}
        autoRaf={false}
        options={{
          duration: 2,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: true,
          touchMultiplier: 2,
        }}
      >
        <Nav />

        <div className="content-holder">
          <Header />
        </div>

      </ReactLenis>
    </>
  );
}
