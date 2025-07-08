"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = dynamic(() => import("./Nav"), {
  ssr: false,
});

export default function ClientWrapper({ children }) {
  const lenisRef = useRef(null);

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
    const ctx = gsap.context(() => {});

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Nav />
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
        <div className="content-holder w-full h-auto relative">{children}</div>
      </ReactLenis>
    </>
  );
}
