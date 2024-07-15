// FabricTextures.js
import React from "react";
import { motion } from "framer-motion";
import { FabricTextures } from "../config/constants"; // Ensure correct path to your FabricTextures data

const FabricTexturesPicker = ({ onSelectTexture }) => {
  const handleSelectTexture = (texture) => {
    onSelectTexture(texture);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {FabricTextures.map((texture) => (
        <motion.img
          key={texture.id}
          src={texture.textureUrl}
          alt={texture.name}
          className="w-32 h-32 m-2 rounded-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleSelectTexture(texture)}
        />
      ))}
    </div>
  );
};

export default FabricTexturesPicker;
