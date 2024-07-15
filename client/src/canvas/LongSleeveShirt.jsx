import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const LongSleeveShirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/dickies_long_sleeve_shirt.glb");
  console.log({ "nodes: ": nodes });
  console.log({ "materials: ": materials });

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  useFrame((state, delta) =>
    easing.dampC(materials.Shirt.color, snap.color, 0.25, delta)
  );
  console.log(
    { "snap.color: ": snap.color },
    { "materials.Shirt.color: ": materials.Shirt.color }
  );
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
       {/* <ambientLight intensity={9.5} /> */}
      <mesh
        // castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Shirt}
        material-roughness={1}
        dispose={null}
        position={[-0.01, -0.05, 0.1]}
        scale={0.51}
        // rotation={[-Math.PI / 2, 0, 0]}
      >
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
            position={[0.17, 0.13, 0.15]}
            // position={[0.2, 0.1, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            // mapAnitrosopy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default LongSleeveShirt;
