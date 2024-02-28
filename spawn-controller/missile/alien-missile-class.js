import { canvasParam } from "../../canvasParam.js";


export class AlienMissile{
    constructor({position,velocity}){
        this.position = position;
        this.velocity = velocity;
        this.width = 3;
        this.height = 15;
    }
    draw(){
      canvasParam.c.beginPath();
      canvasParam.c.save();
      canvasParam.c.fillStyle = 'orange';
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
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
};