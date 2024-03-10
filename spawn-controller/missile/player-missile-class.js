import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";

export class Missile{
    constructor({position}){
      this.position = position;
      this.velocity = {
          x: 0,
          y: -5
      } ;
      this.width = 3;
      this.height = 10;
    }
    draw(){
      canvasParam.c.save();
      canvasParam.c.fillStyle = 'blue';
      canvasParam.c.fillRect(
          this.position.x,
          this.position.y,
          this.width,
          this.height)
      canvasParam.c.fill()
      canvasParam.c.restore()
    }
    update(){
      if(!gameVariables.isGameOver) {
        this.position.y += this.velocity.y;
        this.draw();
      }
    }
} 