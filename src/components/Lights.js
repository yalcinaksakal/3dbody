import React from "react";
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} color="#ffceb4" />
      <directionalLight
        position={[10, 10, 15]}
        intensity={0.5}
        color="#ecbcb4"
      />
      ;
      <directionalLight position={[0, 10, 0]} intensity={0.5} />;
      <spotLight intensity={0.5} position={[1000, 0, 0]} color="#ecbcb4" />;
    </>
  );
};

export default Lights;
