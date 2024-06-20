import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";

export class Ability {
  constructor({ position, image }) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 2,
    };
    this.width = 30;
    this.height = 30;
    this.image = image;
    this.name = "";
  }

  draw() {
    canvasParam.c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    if (!gameVariables.isGameOver) {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }
}
