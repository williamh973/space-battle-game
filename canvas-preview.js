import { canvasParam, selectedCanvasColor } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";
import { createPlayerImage, thePlayerSpaceShip } from "./spawn-controller/player/player-assets.js";


export const canvasPreview = (selectedColor) => {

    selectedCanvasColor(selectedColor);

    canvasParam.c.fillStyle = selectedColor;

    canvasParam.c.clearRect(
        0, 
        0, 
        canvasParam.canvas.width, 
        canvasParam.canvas.height
        );
        
    canvasParam.c.fillRect(
        0,
        0,
        canvasParam.canvas.width,
        canvasParam.canvas.height
        );
};


export const playerPreview = () => {
    createPlayerImage(thePlayerSpaceShip);
}