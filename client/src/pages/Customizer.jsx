import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  FabricTexturesPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  const [selectedFabricTexture, setSelectedFabricTexture] = useState(null);

  // displaying tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker": {
        return <ColorPicker />;
      }

      case "filepicker": {
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      }
      // case "fabrictexturespicker": {
      //   return <FabricTexturesPicker onSelectTexture={handleSelectFabricTexture} />;
      // }
      case "aipicker": {
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      }
      default:
        return null;
    }
  };
  const handleSelectFabricTexture = (texture) => {
    setSelectedFabricTexture(texture.textureUrl);
  };
  const handleSubmit = async (type) => {
    if (!prompt) {
      toast.error("Please enter a prompt");
      return;
    }

    try {
      // call the backend to generate the AI image
      setGeneratingImg(true);
      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log({ data: data });
      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-center",
      });
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const handleTabClick = (tabName) => {
    setActiveEditorTab((prevTab) => (prevTab === tabName ? null : tabName));
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };
  const [isOpen, setIsOpen] = useState(true);

  const toggleTabs = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div
                className={`editortabs-container tabs fixed left-0  ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
              >
                <div className="flex flex-col h-1/2 space-y-6">
                  {EditorTabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      tab={tab}
                      handleClick={() => handleTabClick(tab.name)}
                      isActive
                      // className={"justify-between"}
                    />
                  ))}
                  {generateTabContent()}
                </div>
              </div>

              <div
                className={`${
                  isOpen ? "ml-16" : "ml-0"
                } toggle-icon fixed rounded-tr-md rounded-br-md left-1 transform -translate-y-4/5 py-2 shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10 cursor-pointer`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.272)" }}
                onClick={toggleTabs}
              >
                {isOpen ? (
                  <BiChevronLeft size={24} className="text-gray-800 " />
                ) : (
                  <BiChevronRight size={24} className="text-gray-800" />
                )}
              </div>
            </div>
          </motion.div>

          <motion.div className="absolute top-5 left-5 z-50" {...fadeAnimation}>
            <CustomButton
              type="outline"
              title={
                <span>
                  <KeyboardArrowLeftIcon className="inline-block mr-1 mb-0.5" />
                  Back to Main
                </span>
              }
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm flex items-center"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => {
                  if (tab.name === "download") {
                    downloadCanvasToImage();
                  } else {
                    handleActiveFilterTab(tab.name);
                  }
                }}
              />
            ))}
          </motion.div>
        </>
      )}
      {selectedFabricTexture && (
        <motion.img
          src={selectedFabricTexture}
          alt="Fabric Texture"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      <ToastContainer position="top-center" />
    </AnimatePresence>
  );
};

export default Customizer;
