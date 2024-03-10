import { canvasParam } from "./canvas-parameters.js";
import { gameVariables } from "./game-variables.js";


export const drawTextGameOver = () => {
    canvasParam.c.font = '50px Arial';
    canvasParam.c.fillStyle = 'black';
    canvasParam.c.strokeStyle = 'white';
    canvasParam.c.lineWidth = 3; 
    canvasParam.c.textAlign = 'center';
    canvasParam.c.textBaseline = 'middle';
    const text = 'GAME OVER';
    const x = canvasParam.canvas.width / 2;
    const y = canvasParam.canvas.height / 2;
    canvasParam.c.strokeText(text, x, y);
    canvasParam.c.fillText(text, x, y);
};


export const checkIfGameOver = (invader) => {
    const invadersOffScreenOnBelow = invader.position.y + invader.height >= canvasParam.canvas.height;
    const playerLifeEqualToZero = gameVariables.lifes <= 0;

  if (invadersOffScreenOnBelow || playerLifeEqualToZero) {
    return (
        gameVariables.isGameOver = true,
        drawTextGameOver()
        )
  }
};