import { swatch, fileIcon, ai, text, logoShirt, stylishShirt, download, fabric, fabricWallpaper, blackSilk, brownSatin, blackBlue, colorfulSatin, leather, cotton, greenGold, blueTexure, mixTextures, jeans, colorful, blueWhiteTexure } from "../assets";

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
  { name: "fabrictexturespicker", title: "Fabric Textures", icon: fabric, label: "Fabric Textures" },
  {
    name: "texteditor",
    icon: text,
    title: "Write Text on Shirt",
    description: "Write text on the shirt and customize font family and size",
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


export const FabricTextures = [
  { id: 1, name: "fabricWallpaper", textureUrl: fabricWallpaper },
  { id: 2, name: "mixTextures", textureUrl: mixTextures },
  { id: 3, name: "blueWhiteTexure", textureUrl: blueWhiteTexure },
  { id: 4, name: "colorful", textureUrl: colorful },
  { id: 5, name: "greenGold", textureUrl: greenGold },
  { id: 6, name: "brownSatin", textureUrl: brownSatin },
  { id: 7, name: "leather", textureUrl: leather },
  { id: 8, name: "cotton", textureUrl: cotton },
  { id: 9, name: "blueTexure", textureUrl: blueTexure },
  { id: 10, name: "blackBlue", textureUrl: blackBlue },
  { id: 11, name: "blackSilk", textureUrl: blackSilk },

];
