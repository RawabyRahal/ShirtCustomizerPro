import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#f0bebb',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png',
    fabricTexture: null,
})

export default state;