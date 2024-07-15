import React from "react";
import CustomButton from "./CustomButton";
import { UploadCloud } from "react-feather";
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <label
          htmlFor="file-upload"
          className="filepicker-label cursor-pointer flex items-center justify-center  px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          <UploadCloud size={20} className="mr-2" />
          Upload File
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>
        <p className="mt-2 text-gray-200 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full Image"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
