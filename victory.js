import { canvasParam } from "./canvas-parameters.js";
import { gameVariables } from "./game-variables.js";

export const drawTextVictory = () => {
  canvasParam.c.font = "80px Fantasy";
  canvasParam.c.fillStyle = "black";
  canvasParam.c.strokeStyle = "whitesmoke";
  canvasParam.c.shadowColor = "white";
  canvasParam.c.shadowBlur = 5;
  canvasParam.c.lineWidth = 2;
  canvasParam.c.textAlign = "center";
  canvasParam.c.textBaseline = "middle";
  const text = "YOU WIN";
  const x = canvasParam.canvas.width / 2;
  const y = canvasParam.canvas.height / 2;
  canvasParam.c.strokeText(text, x, y);
  canvasParam.c.fillText(text, x, y);
};

export const checkIfPlayerWin = () => {
  gameVariables.isPlayerWin = true;
  drawTextVictory();
};
