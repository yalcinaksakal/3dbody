import React, { useState } from "react";
import "./App.scss";

import HtmlContent from "./components/HtmlContent";
// import Lights from "./components/Lights";
const models = [
  { title: "Female", gltf: "/gltfs/female_base_mesh/scene.gltf" },
  { title: "Male", gltf: "/gltfs/male_base_mesh2/scene.gltf" },
];

export default function App() {
  const [events, setEvents] = useState();

  const [modelIndex, setModelIndex] = useState(0);
  // const onScroll = e => (state.top.current = e.target.scrollTop);
  // useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      {/* R3F Canvas */}
      {modelIndex === 0 && (
        <button onClick={() => setModelIndex(1)}>Male</button>
      )}
      {modelIndex === 1 && (
        <button onClick={() => setModelIndex(0)}>Female</button>
      )}

      <HtmlContent
        modelPath={models[modelIndex].gltf}
        positionY={310}
        title={models[modelIndex].title}
      />
    </>
  );
}
