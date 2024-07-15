import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import LongSleeveShirt from "./LongSleeveShirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import { CustomButton } from "../components";

const CanvasModel = () => {
  const [isLongSleeve, setIsLongSleeve] = useState(false);
  const toggleSleeveLength = () => {
    setIsLongSleeve((prev) => !prev);
  };
  return (
    <div className="relative w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>{!isLongSleeve ? <Shirt /> : <LongSleeveShirt />}</Center>
        </CameraRig>
      </Canvas>
      <div className="absolute top-1 right-5 z-10">
        <CustomButton
          type="filled"
          title={
            isLongSleeve ? "Switch to Short Sleeves" : "Switch to Long Sleeves"
          }
          customStyles=" mt-4"
          handleClick={toggleSleeveLength}
        />
      </div>
    </div>
  );
};

export default CanvasModel;
