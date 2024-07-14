import { swatch, fileIcon, ai, logoShirt, stylishShirt, download } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    title: "Choose and Customize Colors",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    title: "Upload Images",
    description: "Select and upload images for customization",
  },
  {
    name: "aipicker",
    icon: ai,
    title: "Generate Image from Text",
    description: "Use AI to create images based on text input",
  },
];


export const FilterTabs = [
  {
    name: "logoShirt",
    title: "Shirt with Logo",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    title: "Logo on Full Shirt",
    icon: stylishShirt,
  },
  {
    name: "download",
    title: "Download Design",
    icon: download,
  },
];


export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
