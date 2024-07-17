import React, { useState } from "react";
import CustomButton from "./CustomButton";

const TextEditor = ({ handleApplyText }) => {
  const [text, setText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(24);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value));
  };
  const applyText = () => {
    handleApplyText(text, fontFamily, fontSize);
    console.log({"text, fontFamily, fontSize: " : text, fontFamily, fontSize});
  };

  return (
    <div className="texteditor-container">
      <div className="flex-1 flex flex-col gap-2 ">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here"
        className="border border-gray-300 px-2 py-1 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        {/* <textarea
          placeholder="Type your text here"
          rows={5}
          onChange={handleTextChange}
          className=" px-3 placeholder:text-gray-700  text-black rounded-lg outline-none border-none font-medium mb-5"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='24'><rect fill='rgb(229, 225, 187)' x='0' y='23' width='10' height='1'/></svg>")`,
          }}
        /> */}
        <select
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className="texteditor-label "
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          placeholder="Font Size"
          className="texteditor-label"
        />
        <div className="mt-3 flex flex-wrap items-end">
          <CustomButton
            type="filled"
            title="Apply"
            handleClick={applyText}
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
