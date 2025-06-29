"use client";

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import gsap from "gsap";
import useResponsive from "@/hooks/useResponsive";

const LINES = 3;
const LINE_COLOR = "#fff";
const PRECISION = 10;
const FREQUENCY = 0.002;
const params = { amplitude: 2 };
const simplex = createNoise3D();

class Line {
  constructor(context, i = Math.random()) {
    this.context = context;
    this.canvas = context.canvas;
    this.i = i;
  }

  get stepX() {
    return this.canvas.width / PRECISION;
  }

  update(t) {
    const y = (this.i - LINES * 0.5 + 0.5) * 2;
    const offset = this.canvas.height / 2 + y;
    this.points = new Array(Math.ceil(this.stepX) + 1).fill(0).map((_, i) => {
      const multiplier =
        Math.sin(
          ((this.canvas.width - i * PRECISION) / this.canvas.width) * Math.PI
        ) * 0.75;
      return {
        x: i * PRECISION,
        y:
          simplex(i * PRECISION * FREQUENCY, this.i, t) *
            params.amplitude *
            multiplier +
          offset,
      };
    });
  }
}

class AudioWave {
  constructor(context) {
    this.context = context;
    this.canvas = context.canvas;
    this.lines = [];
    for (let i = 0; i < LINES; i++) {
      this.lines.push(new Line(context, i));
    }
  }

  draw(t) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.lines.forEach((line) => line.update(t));
    this.context.globalAlpha = 0.33;

    const shape1 = [...this.lines[0].points, ...this.lines[2].points.reverse()];
    this.context.save();
    this.context.beginPath();
    shape1.forEach(({ x, y }) => {
      this.context.lineTo(x, y);
    });
    let gradient = this.context.createLinearGradient(
      0,
      0,
      this.canvas.width,
      0
    );
    gradient.addColorStop(0, "rgba(255,255,255,.2)");
    gradient.addColorStop(1, "rgba(255,255,255,.4)");
    this.context.fillStyle = gradient;
    this.context.fill();
    this.context.closePath();
    this.context.restore();

    this.context.globalAlpha = 0.5;
    const shape2 = [...this.lines[1].points, ...this.lines[2].points.reverse()];
    this.context.save();
    this.context.beginPath();
    shape2.forEach(({ x, y }) => {
      this.context.lineTo(x, y);
    });
    gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0.8, "rgba(255,255,255,.1)");
    gradient.addColorStop(0.2, "rgba(255,255,255,.5)");
    this.context.fillStyle = gradient;
    this.context.fill();
    this.context.closePath();
    this.context.restore();

    this.context.globalAlpha = 1;
    this.lines.forEach(({ points }) => {
      this.context.save();
      this.context.beginPath();
      points.forEach(({ x, y }, i) => {
        this.context.lineTo(x, y);
      });
      this.context.strokeStyle = LINE_COLOR;
      this.context.stroke();
      this.context.closePath();
      this.context.restore();
    });
  }
}

export default function AudioVisualizer() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);

  const { isTablet } = useResponsive();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const audioWave = new AudioWave(context);

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      canvas.width = width;
      canvas.height = height;
    });

    resizeObserver.observe(canvas.parentNode);

    audioRef.current.volume = 0.4;

    const raf = (t) => {
      audioWave.draw(t * 0.001);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => resizeObserver.disconnect();
  }, []);

  const handleToggle = () => {
    setPlay((prevPlay) => {
      const newPlay = !prevPlay;
      if (newPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      gsap.to(params, {
        duration: 1.5,
        amplitude: newPlay ? 20 : 2,
        ease: "expo.out",
      });
      return newPlay;
    });
  };
  return (
    <div
      className="w-max flex items-end gap-3 cursor-pointer select-none group"
      onClick={handleToggle}
    >
      {!isTablet && (
        <div className="flex flex-col items-stretch text-right h-full">
          <span>Music</span>
          <span>Toggle</span>
        </div>
      )}
      <div className="relative w-[50px] h-[50px] group customClipLeftUp border border-transparent transition-colors duration-300 backdrop-blur-md bg-[rgba(25,25,25,0.75)]">
        <svg
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          viewBox="-1.5 -1.5 103 103"
          preserveAspectRatio="none"
        >
          <polygon
            points="0,0 100,0 100,50 100,100 30,100 0,70"
            fill="none"
            stroke="rgba(135,135,135,0.2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className={`${play ? "play" : ""} w-full h-full`}>
          <audio ref={audioRef} loop src="/sfx/bgMusic.mp3" />
          <canvas
            ref={canvasRef}
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
