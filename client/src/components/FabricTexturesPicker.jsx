import React from "react";
import { FabricTextures } from "../config/constants";
import state from "../store";
import CustomButton from "./CustomButton";

const FabricTexturesPicker = ({ onSelectTexture }) => {
  return (
    <div className="absolute left-full ml-6 glassmorphism -bottom-10 p-3 w-[130px] h-[390px] flex flex-col rounded-md overflow-auto">
      {FabricTextures.map((texture) => (
        <div
          key={texture.id}
          className="fabric-texture flex justify-center items-center border border-gray-300 rounded cursor-pointer p-1 mb-2"
          onClick={() => onSelectTexture(texture)}
        >
          <img
            src={texture.textureUrl}
            alt={texture.name}
            className="h-20 w-20 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default FabricTexturesPicker;
