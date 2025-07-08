"use client";

import { useEffect, useRef, useState } from "react";
import { TextHeatReveal } from "./TextHeatReveal";

export default function ImageASCI({ src, className }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    setCanvasHeight(window.innerHeight / 1.8);
    window.addEventListener("resize", () =>
      setCanvasHeight(window.innerHeight / 1.8)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setCanvasHeight(window.innerHeight / 1.8)
      );
      setCanvasHeight(0);
    };
  }, []);

  useEffect(() => {
    if (canvasHeight) {
      const canvas = canvasRef.current;
      const image = new TextHeatReveal(canvas, src, {
        gridSize: 12,
        fontSize: 10,
        characters: "✦❍QWERTYUIOPASDFGHJKLZXCVBNM*+",
        resolution: 176,
        diffusion: 0.92,
        decay: 0.98,
        threshold: 0.04,
        contrast: 1.25,
        minBrightness: 0.2,
        textOpacity: 0.85,
        imageBrightness: 1,
        imageContrast: 1.0,
        scrambleInterval: 1500,
        scrambleAmount: 0.08,
        words: [
          "ENTREPRENEURSHIP",
          "11GEN",
          "POWER",
          "FIGHT",
          "CODE",
          "DELIGHT",
          "DREAM",
        ],
      });

      imageRef.current = image;

      return () => image?.destroy();
    }
  }, [canvasHeight]);

  return (
    <div ref={containerRef} id="canvas-container" className={className}>
      <canvas
        ref={canvasRef}
        id="canvas"
        width="470"
        height={canvasHeight}
      ></canvas>
    </div>
  );
}
