import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";
import { createTextTexture, getContrastingColor } from "../config/helpers";
const Shirt = () => {
  const snap = useSnapshot(state);

  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  // console.log({"nodes: " : nodes})
  // console.log({"materials: " : materials})
  const texture = useTexture(snap.fullDecal || snap.fabricTexture);

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  const textColor = getContrastingColor(snap.color);
  const textProperties = snap.textProperties;
  const textTexture = createTextTexture(
    textProperties.text,
    textProperties.fontFamily,
    textProperties.fontSize,
    textColor,
    textProperties.rotation,
    textProperties.position
  );
  console.log({ textTexture });

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {/* {snap.textProperties && <meshStandardMaterial map={texture} />} */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            // position={[0.095, 0.07, 0.15]}
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            // mapAnitrosopy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        {textTexture && (
          <Decal
            position={[-0.01, -0.1, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.3}
            map={textTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
