import React from "react";
import { FabricTextures } from "../config/constants";
import state from "../store";
import CustomButton from "./CustomButton";
const FabricTexturesPicker = ({ onSelectTexture}) => {
  return (
    <div className="filepicker-container">
      {FabricTextures.map((texture) => (
        <div
          key={texture.id}
          className="fabric-texture"
          onClick={() => onSelectTexture(texture)}
        >
          <img
            src={texture.textureUrl}
            alt={texture.name}
            className="h-20 w-20"
          />
        </div>
      ))}
    </div>
  );
};

export default FabricTexturesPicker;
