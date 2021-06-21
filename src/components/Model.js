import { useGLTFLoader } from "drei";
import React from "react";
const Model = ({ url = "/gltfs/female_base_mesh/scene.gltf" }) => {
  const gltf = useGLTFLoader(url, true);
  gltf.scene.scale.set(50, 50, 50);
  return <primitive object={gltf.scene} dispose={null} />;
};

export default Model;
