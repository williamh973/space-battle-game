import { canvasParam } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";


export const drawTextVictory = () => {
    canvasParam.c.font = '50px Arial';
    canvasParam.c.fillStyle = 'black';
    canvasParam.c.strokeStyle = 'white';
    canvasParam.c.lineWidth = 2; 
    canvasParam.c.textAlign = 'center';
    canvasParam.c.textBaseline = 'middle';
    const text = 'YOU WIN';
    const x = canvasParam.canvas.width / 2;
    const y = canvasParam.canvas.height / 2;
    canvasParam.c.strokeText(text, x, y);
    canvasParam.c.fillText(text, x, y);
    console.log("text", text);
};


export const checkIfPlayerWin = () => {
        gameVariables.isPlayerWin = true;
        drawTextVictory();
};