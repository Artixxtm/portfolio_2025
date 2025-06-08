import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Logo(props) {
  const { nodes, materials } = useGLTF("/logo.glb");
  const meshRef = useRef();

  const grassMap = useLoader(TextureLoader, "/models/textures/grassblades_02.jpg");
  const leavesMap = useLoader(TextureLoader, "/models/textures/dandelion01.jpg");

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={1000}
        near={0.1}
        fov={22.895}
        position={[2.304, 1.072, 7.927]}
        rotation={[-0.065, 0.258, 0.017]}
      />
      <mesh geometry={nodes.Curve.geometry} material={materials["Material.001"]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.scatter_obj__Grass_Pattern.geometry} castShadow receiveShadow>
        <meshStandardMaterial map={grassMap} roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh geometry={nodes.scatter_obj__Red_Poppy_1.geometry} material={materials["Sc poppy red"]} />
      <mesh geometry={nodes.scatter_obj__Red_Poppy_2.geometry} material={materials["Sc poppy pollen"]} />
      <mesh geometry={nodes.scatter_obj__Paperwhite_1.geometry} material={materials["Sc wild flower white"]} />
      <mesh geometry={nodes.scatter_obj__Paperwhite_2.geometry} material={materials["Sc poppy pollen"]} />
      <mesh geometry={nodes.scatter_obj__Paperwhite_3.geometry} />
      <meshStandardMaterial map={leavesMap} roughness={0.9} metalness={0} />
    </group>
  );
}

useGLTF.preload("/logo.glb");