import { Html } from "drei";
import React from "react";
import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import Model from "./Model";
import { Section } from "./section";

const HtmlContent = () => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01));
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 310, 0]}>
        <mesh ref={meshRef} position={[0, -115, 0]}>
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
