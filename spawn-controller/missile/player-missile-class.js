import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";

export class Missile {
  constructor({ position, velocity, color, shadowBlur }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 3;
    this.height = 20;
    this.color = color;
    this.shadowBlur = shadowBlur;
  }
  draw() {
    canvasParam.c.save();
    canvasParam.c.fillStyle = this.color;
    canvasParam.c.shadowColor = this.shadowBlur;
    canvasParam.c.shadowBlur = 8;

    canvasParam.c.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    canvasParam.c.fill();
    canvasParam.c.restore();
  }
  update() {
    if (!gameVariables.isGameOver) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.draw();
    }
  }
}
