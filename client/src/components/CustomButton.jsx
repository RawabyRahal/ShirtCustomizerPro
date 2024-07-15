import { color } from "framer-motion";
import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import { motion } from "framer-motion";
const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const buttonVariants = {
    rest: (type) => ({
      scale: 1,
      backgroundColor: type === "filled" ? snap.color : "transparent",
      borderColor: snap.color,
      color: type === "filled" ? getContrastingColor(snap.color) : snap.color,
    }),
    hover: (type) => ({
      scale: 1.1,
      backgroundColor: type === "filled" ? "transparent" : snap.color,
      borderColor: type === "filled" ? snap.color : "transparent",
      borderWidth: type === "filled" ? "1px" : "0px",
      color: type === "filled" ? snap.color : getContrastingColor(snap.color),
    }),
    tap: { scale: 0.95 },
  };

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };
  // return (
  //   <button
  //     className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
  //     style={generateStyle(type)}
  //     onClick={handleClick}
  //   >
  //     {" "}
  //     {title}
  //   </button>
  // );
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      custom={type}
      className={`px-2 py-1.5 flex-1 font-bold rounded-full shadow-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </motion.button>
  );
};

export default CustomButton;
