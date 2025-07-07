"use client"

import React, { useEffect, useRef, useState } from "react";

const StretchedText = ({ text }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [viewBox, setViewBox] = useState("-28 -10.5 56 18");

  useEffect(() => {
    const updateViewBox = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    };

    const timeout = setTimeout(() => {
      updateViewBox();
      if (svgRef.current) {
        const observer = new ResizeObserver(updateViewBox);
        observer.observe(svgRef.current);
        return () => observer.disconnect();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-[102%] 2xl:h-[230px] xl:h-[150px] lg:h-[140px] md:h-[120px] sm:h-[90px] h-[60px] overflow-hidden relative left-[-1.1%] pointer-events-none">
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full fill-white absolute top-[46%] -translate-y-1/2 left-0 cursor-default"
        preserveAspectRatio="none"
      >
        <text
          ref={textRef}
          x="0"
          y="0"
          textAnchor="start"
          lengthAdjust="spacingAndGlyphs"
          alignmentBaseline="baseline"
          dominantBaseline="hanging"
          dx="-3"
>
          <tspan
            alignmentBaseline="baseline"
            className={"mainFont2"}
          >
            {text}
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default StretchedText;
