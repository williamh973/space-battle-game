import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";


export class AlienMissile{
    constructor({position, velocity, width, height, color}){
        this.position = position;
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.color = color
    }

    draw(){
      canvasParam.c.beginPath();
      canvasParam.c.save();
      canvasParam.c.fillStyle = this.color;
      
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
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      }
    }
};