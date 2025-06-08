import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Logo from "./subComponents/Logo";

export default function LogoWrapper() {
  return (
    <>
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={2}
          position={[5, 10, 5]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls />
        <Suspense fallback={null}>
          <Logo />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}
