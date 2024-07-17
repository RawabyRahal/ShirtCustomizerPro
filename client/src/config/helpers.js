import * as THREE from 'three';

export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "custom_shirt_design.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};

// export const createTextTexture = (text, fontFamily, fontSize) => {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   // canvas.width = 512;
//   // canvas.height = 512;
//   context.font = `${fontSize}rem ${fontFamily}`;
//   context.fillText(text, canvas.width / 2, canvas.height / 2);
//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// export const createTextTexture = (text, fontFamily, fontSize, color) => {
//   const scaleFactor = 14; 
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');

//   const textMetrics = context.measureText(text);
//   canvas.width = Math.ceil((textMetrics.width) * scaleFactor);
//   canvas.height = (fontSize + 200) * scaleFactor;

//   // Set font and scaling
//   context.font = `${fontSize * scaleFactor}px ${fontFamily}`;
//   context.fillStyle = color;
//   // context.textAlign = 'center';
//   // context.textBaseline = 'middle';

//   // Draw text with scaling
//   context.fillText(text, canvas.width / 2, canvas.height / 2);

//   // Create and return the texture
//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// };


// export const createTextTexture = (text, fontFamily, fontSize, color) => {
//   const scaleFactor = 4;
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');

//   const maxWidth = 212;
//   const lineHeight = fontSize * scaleFactor

//   context.font = `${fontSize * scaleFactor}px ${fontFamily}`;

//   const wrapText = (context, text, maxWidth) => {
//     const words = text.split('');
//     let lines = [];
//     let currentLine = '';

//     for (let i = 0; i < words.length; i++) {
//       const testLine = currentLine + words[i];
//       const metrics = context.measureText(testLine);
//       const testWidth = metrics.width;

//       if (testWidth > maxWidth && i > 0) {
//         lines.push(currentLine);
//         currentLine = words[i];
//       } else {
//         currentLine = testLine;
//       }
//     }
//     lines.push(currentLine);
//     return lines;
//   };

//   const lines = wrapText(context, text, maxWidth);

//   canvas.width = maxWidth;
//   canvas.height = lines.length * lineHeight;

//   context.font = `${fontSize * scaleFactor}px ${fontFamily}`;
//   context.fillStyle = color;
//   context.textAlign = 'center';
//   context.textBaseline = 'middle';

//   lines.forEach((line, index) => {
//     context.fillText(line, canvas.width / 2, (index + 0.5) * lineHeight);
//   });

//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// };

export const createTextTexture = (text, fontFamily, fontSize, color, rotation, position) => {
  const scaleFactor = 4;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const maxWidth = 212;
  const lineHeight = fontSize * scaleFactor;

  // Calculate text width and height
  context.font = `${fontSize * scaleFactor}px ${fontFamily}`;
  const textMetrics = context.measureText(text);
  const textWidth = Math.ceil(textMetrics.width);
  const textHeight = fontSize * scaleFactor;

  // Adjust canvas size based on text size and maximum width
  canvas.width = maxWidth;
  canvas.height = textHeight;

  // Set font and color
  context.font = `${fontSize * scaleFactor}px ${fontFamily}`;
  context.fillStyle = color;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  // Rotate around the center of the canvas
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(rotation * Math.PI / 180); // Convert degrees to radians
  context.translate(-canvas.width / 2, -canvas.height / 2);

  // Calculate position based on canvas dimensions
  const x = position && position.x !== undefined ? canvas.width * position.x : canvas.width / 2;
  const y = position && position.y !== undefined ? canvas.height * position.y : canvas.height / 2;

  // Draw text
  context.fillText(text, x, y);

  // Reset transformations
  context.setTransform(1, 0, 0, 1, 0, 0); // Reset transformations

  // Create texture
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};
