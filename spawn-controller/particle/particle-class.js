import { canvasParam } from "../../canvasParam.js"

export class Particule{
    constructor({position, velocity, radius, color}){
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        canvasParam.c.save();
        canvasParam.c.globalAlpha = this.opacity;                         
        canvasParam.c.beginPath();
        canvasParam.c.fillStyle = this.color;
        canvasParam.c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        canvasParam.c.fill()
        canvasParam.c.closePath()
        canvasParam.c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -= 0.01;
        }
        this.draw()
    }
}