import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";

export class Missile{
    constructor({position}) {
      this.speed = -5;
      this.position = position;
      this.velocity = {
          x: 0,
          y: this.speed
      } 
      this.width = 3;
      this.height = 20;
    }
    draw() {
      canvasParam.c.save();
      canvasParam.c.fillStyle = 'blue';
      canvasParam.c.shadowColor = 'cyan';
      canvasParam.c.shadowBlur = 8;
  
      canvasParam.c.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
        )
    
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