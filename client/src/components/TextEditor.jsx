import React, { useState } from "react";
import CustomButton from "./CustomButton";

const TextEditor = ({ handleApplyText, textProperties, setTextProperties }) => {
  const { text, fontFamily, fontSize } = textProperties;

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
  const applyText = () => {
    handleApplyText(text, fontFamily, fontSize);
    console.log({ "text, fontFamily, fontSize: ": text, fontFamily, fontSize });
  };

  return (
    <div className="texteditor-container">
      <div className="flex-1 flex flex-col gap-2 ">
        <textarea
          placeholder="Type your text here"
          rows={5}
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
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Georgia">Georgia</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Courier New">Courier New</option>
          <option value="Brush Script MT">Brush Script MT</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Impact">Impact</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Palatino">Palatino</option>
          <option value="Garamond">Garamond</option>
          <option value="Book Antiqua">Book Antiqua</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Century Gothic">Century Gothic</option>
          <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
          <option value="Verdana">Verdana</option>
          <option value="Bookman Old Style">Bookman Old Style</option>
        </select>

        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          placeholder="Font Size"
          className="texteditor-label"
        />
        <div className="mt-3 flex flex-wrap items-end">
          <CustomButton type="filled" title="Apply" handleClick={applyText} />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
