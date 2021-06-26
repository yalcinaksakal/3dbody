import { useGLTFLoader } from "drei";
import * as THREE from "three";
import React from "react";
const Model = ({ url = "/gltfs/female_base_mesh/scene.gltf" }) => {
  let { scene } = useGLTFLoader(url, true);
  //   gltf.scene.scale.set(30, 30, 30);
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.x += scene.position.x - center.x;
  scene.position.y += scene.position.y - center.y;
  scene.position.z += scene.position.z - center.z;
  
  // scene.rotateOnWorldAxis(new THREE.Vector3(0, 0, 0), THREE.Math.degToRad(0));

  return <primitive object={scene} dispose={null} />;
};

export default Model;
