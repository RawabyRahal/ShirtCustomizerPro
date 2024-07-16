import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-6 bottom-9">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={["#ffffff", "#ccc", "#EFBD4E", "#80C670", "#6C5DD3", "#726DE8", "#353934", "#2CCC34",
             "#ff8a65", "#7098DA", "#C19277", "#FF96AD", "#512314", "#5F123D"]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
