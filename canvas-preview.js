import { canvasParam, selectedCanvasColor } from "./canvas-parameters.js";

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
