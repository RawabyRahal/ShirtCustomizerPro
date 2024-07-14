import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
// import LongSleeveShirt from "./LongSleeveShirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

const CanvasModel = () => {
  // const [isLongSleeve, setIsLongSleeve] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>

      {/* <button
        onClick={() => setIsLongSleeve((prev) => !prev)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Toggle Sleeve Length
      </button> */}
    </div>
  );
};

export default CanvasModel;
