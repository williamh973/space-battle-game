export const canvasParam = {
  canvas: document.querySelector("#canvas"),
  c: canvas.getContext("2d"),
};

export function selectedCanvasColor(selectedColor) {
  canvasParam.c.fillStyle = selectedColor;
}

canvasParam.canvas.width = 800;
canvasParam.canvas.height = 600;
