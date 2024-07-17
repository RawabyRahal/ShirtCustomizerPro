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
})

export default state;