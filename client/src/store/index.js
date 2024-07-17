import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#f0bebb',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png',
    // fabricTexture: null,
    textProperties: {
        text: "",
        fontFamily: "",
        fontSize:-1 ,
    },
    rotation: 0, // rotation in degrees
    position: { x: 0.5, y: 0.5 }, // normalized position (0-1 range)
})

export default state;