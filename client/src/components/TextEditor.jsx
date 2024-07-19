import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";
import { fontFamilies } from "../config/constants";

const TextEditor = ({ handleApplyText, textProperties, setTextProperties }) => {
  const { text, fontFamily, fontSize } = textProperties;
  const snap = useSnapshot(state);

  const handleTextChange = (event) => {
    setTextProperties({
      ...textProperties,
      text: event.target.value,
    });
  };

  const handleFontFamilyChange = (event) => {
    setTextProperties({
      ...textProperties,
      fontFamily: event.target.value,
    });
  };

  const handleFontSizeChange = (event) => {
    setTextProperties({
      ...textProperties,
      fontSize: parseInt(event.target.value),
    });
  };

  const handleRotationChange = (event) => {
    state.rotation = parseInt(event.target.value, 10);
  };

  const handlePositionChange = (axis, value) => {
    state.position[axis] = parseFloat(value);
  };

  const applyText = () => {
    handleApplyText(text, fontFamily, fontSize, state.rotation, state.position);
    // console.log({
    //   "text, fontFamily, fontSize, rotation, position: ": text,
    //   fontFamily,
    //   fontSize,
    // });
  };
  const resetFields = () => {
    setTextProperties({
      text: "",
      fontFamily: "",
      fontSize: "",
    });
    state.rotation = 0; // Set rotation to a default value, e.g., 0 degrees
    state.position = { x: 0.5, y: 0.5 };
  };

  return (
    <div className="texteditor-container">
      <div className="flex-1 flex flex-col gap-2 ">
        <textarea
          placeholder="Type your text here"
          rows={5}
          value={text}
          onChange={handleTextChange}
          className=" px-3 placeholder:text-gray-700  text-black rounded-lg outline-none border-none font-medium mb-5"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
          }}
        />
        <select
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className="texteditor-label"
          placeholder="Select Font Family"
        >
          <option value="" disabled>
            Select Font Family
          </option>
          {fontFamilies.map((family) => (
            <option key={family} value={family}>
              {family}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={snap.rotation}
          onChange={handleRotationChange}
          className="texteditor-label"
          placeholder="Rotation (degrees)"
        />
        <div className="items-center flex flex-row w-full gap-2">
          <label htmlFor="positionX" className="texteditor-position">
            Position X:
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="texteditor-label"
            value={snap.position.x}
            onChange={(e) => handlePositionChange("x", e.target.value)}
          />
          <span className="input-value">{snap.position.x}</span>
        </div>

        <div className="items-center flex flex-row w-full gap-2">
          <label htmlFor="positionY" className="texteditor-position">
            Position Y:
          </label>
          <input
            type="range"
            min="0"
            max="1"
            className="texteditor-label"
            step="0.01"
            value={snap.position.y}
            onChange={(e) => handlePositionChange("y", e.target.value)}
          />
          <span className="input-value">{snap.position.y}</span>
        </div>
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          placeholder="Font Size"
          className="texteditor-label"
        />
        <div className="mt-8 flex flex-wrap w-3/4 gap-4">
          <CustomButton type="filled" title="Apply" handleClick={applyText} />
          <CustomButton type="outline" title="Reset" handleClick={resetFields} />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
