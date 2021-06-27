import { useGLTFLoader } from "drei";
import * as THREE from "three";
import React from "react";

const Model = ({ modelPath }) => {
  const { scene } = useGLTFLoader(modelPath, true);

  //   gltf.scene.scale.set(30, 30, 30);
  scene.position.x = 0;
  scene.position.y = 0;
  scene.position.z = 0;
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  scene.position.x += scene.position.x - center.x;
  scene.position.y += scene.position.y - center.y;
  scene.position.z += scene.position.z - center.z;

  scene.traverse(object => {
    if (object.isMesh)
      object.material = new THREE.MeshStandardMaterial({
        color: "gray",
        transparent: false,
        opacity: 1,
      });
  });

  return (
    <primitive
      object={scene}
      dispose={null}
      onClick={e => {
        //
      }}
    />
  );
};

export default Model;
