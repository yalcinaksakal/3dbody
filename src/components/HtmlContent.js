import { Html } from "drei";
import React, { useState } from "react";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import Model from "./Model";
import { Section } from "./section";

const HtmlContent = () => {
  const meshRef = useRef();
  

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    // meshRef.current.position.x += 1;
    // meshRef.current.position.x = meshRef.current.position.x%50;
    meshRef.current.rotation.z += 0.01;
  });

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 320, 0]}>
        <mesh
          ref={meshRef}
          position={[0, -60, 0]}
          scale={[40, 40, 40]}
     
        >
          <Model />
        </mesh>

        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};
export default HtmlContent;
