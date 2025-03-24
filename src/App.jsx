import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <UI />
              <Loader />
              <Canvas
                shadows
                camera={{
                  position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                  fov: 45,
                }}
              >
                <group position-y={0}>
                  <Suspense fallback={null}>
                    <Experience />
                  </Suspense>
                </group>
              </Canvas>
            </>
          }
        />

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
  );
}

export default App;
