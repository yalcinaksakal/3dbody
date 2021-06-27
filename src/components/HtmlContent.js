import { Html } from "drei";
import React, { Suspense } from "react";
import { useRef } from "react";
import { Canvas } from "react-three-fiber";
// import { useFrame } from "react-three-fiber";
import Lights from "./Lights";
import Model from "./Model";
import { Section } from "./section";

let isRotating = false;
let isAutoRotating = true;
const oldCords = { x: 0, y: 0 };

const HtmlContent = ({ modelPath, positionY, title }) => {
  const meshRef = useRef();

  // outside of the canvas context, useFrame is useless. useFrame hook is reliant on canvas context
  // useFrame(() => {
  //   if (!isAutoRotating) return;

  //   meshRef.current.rotation.x += 0.01;
  //   meshRef.current.rotation.y += 0.01;
  // });

  const rotate = () => {
    meshRef.current.rotation.y += 0.01;
  };

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onPointerDown={e => {
        const { clientX: x, clientY: y } = e;
        isAutoRotating = false;
        isRotating = true;
        oldCords.x = x;
        oldCords.y = y;
      }}
      onPointerUp={() => {
        isRotating = false;
      }}
      onPointerMove={e => {
        if (!isRotating) return;
        const { clientX: x, clientY: y } = e;
        const xDif = x - oldCords.x;
        const yDif = y - oldCords.y;

        Math.abs(xDif) >= Math.abs(yDif)
          ? (meshRef.current.rotation.y += 0.1 * (xDif > 0 ? 1 : -1))
          : (meshRef.current.rotation.x += 0.1 * (yDif > 0 ? 1 : -1));

        oldCords.x = x;
        oldCords.y = y;
      }}
    >
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <Section factor={1.5} offset={1}>
            <group position={[0, 310, 0]}>
              <mesh
                ref={meshRef}
                position={[0, -60, 0]}
                scale={title === "Female" ? [40, 40, 40] : [11, 11, 11]}
                onBeforeRender={() => isAutoRotating && rotate()}
              >
                <Model modelPath={modelPath} />
              </mesh>

              <Html fullscreen>
                <div className="container">
                  <h1 className="title">{title}</h1>
                  <p>Drag to rotate model</p>
                </div>
              </Html>
            </group>
          </Section>
        </Suspense>
      </Canvas>
    </div>
  );
};
export default HtmlContent;
