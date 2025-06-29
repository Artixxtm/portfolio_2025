"use client";

import useResponsive from "@/hooks/useResponsive";
import dynamic from "next/dynamic";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SiMaildotru, SiFitbit } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import DecryptedText from "./DecryptedText";

const AudioVisualizer = dynamic(() => import("./AudioVisualizer"), {
  ssr: false,
});

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Nav = () => {
  const { isTablet, isSmallMobile } = useResponsive();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      if (isTablet) {
        gsap.set(".menu-link-item-holder", { y: 75 });

        tl.current = gsap
          .timeline({ paused: true })
          .to(".menu-overlay", {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
          })
          .to(".menu-link-item-holder", {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          });
      }
    },
    { scope: container }
  );

  const closeMenuOnInternalLink = useCallback((path) => {
    if (path?.startsWith("/")) setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isTablet) {
      if (isMenuOpen) tl.current.play();
      else tl.current.reverse();
    }
  }, [isMenuOpen]);

  const textSizeClass = useMemo(
    () => (isSmallMobile ? "text-4xl" : "text-5xl"),
    [isSmallMobile]
  );

  return (
    <>
      {isTablet ? (
        <motion.div
          ref={container}
          className="fixed z-[1000] inset-0 w-full"
          initial={{ height: "48px", top: "10px" }}
          animate={
            isMenuOpen
              ? { height: "100svh", top: "0px" }
              : { height: "48px", top: "16px" }
          }
          exit={{ height: "48px", top: "16px" }}
        >
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.77, 0, 0.175, 1],
            }}
            className={`fixed left-0 w-full h-auto md:top-8 top-4 flex justify-between lg:items-start items-center z-[100] md:px-10 px-5 fontMain5 mix-blend-difference`}
          >
            <div className="flex lg:w-full w-max gap-8">
              <a href="mailto:officalwoolf@gmail.com" target="_blank">
                <SiMaildotru size={26} />
              </a>
            </div>
            <div className="flex flex-col items-center w-full">
              <h2 className="fontMain6">Artem Naumenko</h2>
              <p>Artixx™</p>
            </div>
            <div className="flex lg:w-full w-max justify-end gap-8">
              <motion.button
                initial={{ rotate: "0deg" }}
                animate={isMenuOpen ? { rotate: "-90deg" } : { rotate: "0deg" }}
                transition={{
                  duration: 0.55,
                  ease: [1, 0.01, 0.28, 1],
                }}
                className="h-max lg:hidden flex"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <SiFitbit size={26} />
              </motion.button>
            </div>
          </motion.nav>

          <div className="menu-overlay">
            <div className="menu-copy h-full relative overflow-hidden">
              <div className="w-full h-[80%] absolute left-0 top-1/2 -translate-y-1/2 bg-[#99ff59] customClipNav" />
              <div className="menu-links flex flex-col items-center relative mt-[-30px] gap-8 w-full">
                <AnimatePresence>
                  {menuLinks.map((link, index) => (
                    <div className="menu-link-item w-full" key={index}>
                      <div className="menu-link-item-holder text-black w-full">
                        <Link
                          href={link.path}
                          target={link.target ?? null}
                          className="flex items-center w-full relative"
                          onClick={() => closeMenuOnInternalLink(link.path)}
                        >
                          <motion.span
                            className={`mainFont2 ${textSizeClass} w-full text-center uppercase font-[600]`}
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.77, 0, 0.175, 1],
          }}
          className={`fixed left-0 w-full h-auto md:top-8 top-4 flex justify-between lg:items-start items-center z-[100] md:px-10 px-5 fontMain5`}
        >
          <div className="flex lg:w-full w-max gap-8">
            <div className="lg:flex hidden flex-col">
              <a href="https://www.instagram.com/artixxtm/" target="_blank">
                <DecryptedText text="Instagram" animateOn="hover" />
              </a>
              <a href="https://t.me/artixxtm/" target="_blank">
                <DecryptedText text="Telegram" animateOn="hover" />
              </a>
            </div>
            <a href="mailto:officalwoolf@gmail.com" target="_blank">
              <DecryptedText text="officalwoolf@gmail.com" animateOn="hover" />
            </a>
          </div>
          <div className="flex flex-col items-center w-full">
            <h2 className="fontMain6">Artem Naumenko</h2>
            <p>Artixx™</p>
          </div>
          <div className="flex w-full justify-end gap-8">
            <p className="flex cursor-default">
              <DecryptedText
                text="open for freelance \ work"
                animateOn="hover"
              />
            </p>
            <div className="flex flex-col text-right">
              <a href="https://www.linkedin.com/in/artixx/" target="_blank">
                <DecryptedText text="LinkedIn" animateOn="hover" />
              </a>
              <a href="https://github.com/Artixxtm/" target="_blank">
                <DecryptedText text="GitHub" animateOn="hover" />
              </a>
            </div>
            <button className="h-max lg:hidden flex">
              <SiFitbit size={26} />
            </button>
          </div>
        </motion.nav>
      )}

      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.77, 0, 0.175, 1],
        }}
        className={`fixed left-0 w-full h-auto md:bottom-8 bottom-4 flex justify-between z-[1001] md:px-10 px-5 fontMain5`}
      >
        <div className="w-full flex flex-col items-start justify-end fontMain5">
          <a href="#">From</a>
          <a href="#">Poland</a>
        </div>

        <div className="w-full lg:flex hidden items-end justify-center uppercase h-full gap-8 fontMain6">
          <div className="relative flex w-auto items-center justify-center gap-8 py-4 px-10 customClipWrapper backdrop-blur-md bg-[rgba(25,25,25,0.75)]">
            <svg
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
              viewBox="-0.5 -0.5 101 101"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,100 0,20 5,0 99.5,0 99.5,80 94.5,100"
                fill="none"
                stroke="rgba(135,135,135,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Menu links */}
            {menuLinks.map((link, index) => (
              <Link href={link.path} key={index} className="relative group">
                {link.label}
                <div className="w-1 h-1 bg-white/85 absolute left-1/2 -translate-x-1/2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full flex items-end justify-end content-end h-full fontMain5 opacity-90">
          <AudioVisualizer />
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
