import { canvasParam } from "../../canvasParam.js";
import { gameVariables } from "../../gameVariables.js";
import { Alien } from "../alien/alien-class.js";

export class Grid{
    constructor() {
        this.position = { 
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 1,
            y: 0
        }
        this.invaders = []
        this.colums = 1 + gameVariables.score;
        this.rows = 1 + gameVariables.score;
        this.scale = 35;
        this.width = this.colums * this.scale;
        this.height = this.rows * this.scale;
        this.draw();
    }
    draw() { 
        for (let x = 0; x < this.colums; x++) {
            for(let y = 0; y < this.rows; y++) {
                this.invaders.push(new Alien({
                    position:{
                        x : x * this.scale,
                        y : y * this.scale
                    }
                }))
            }
        }
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;
        
        if (this.position.x + this.width  >= canvasParam.canvas.width || this.position.x === 0){
            this.velocity.x = - this.velocity.x;
            this.velocity.y = 34;
        }
    }
    drawDebugCollisionSquare() {
        const ctx = canvasParam.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;

        ctx.rect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        ctx.stroke();
        ctx.closePath();
    }
}