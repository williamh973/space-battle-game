import { canvasParam } from "../../canvasParam.js";
import { Alien } from "../alien/alien-class.js";

export class Grid{
    constructor(){
        this.position = { 
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 1,
            y: 0
        }
        this.invaders = []
        let rows = Math.floor( (canvasParam.canvas.height / 20) * ( 1 / 5) );
        const colums = Math.floor( (canvasParam.canvas.width / 10) * (1 / 5) );
        this.height = rows * 34;
        this.width = colums * 34;
        for (let x = 0; x < colums; x++) {
			for(let y = 0; y < rows; y++) {
                this.invaders.push(new Alien({
                    position:{
                        x: x * 34,
                        y: y * 34
                    }
                }))
            }
        }
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;
        if(this.position.x + this.width  >= canvasParam.canvas.width || this.position.x == 0){
            this.velocity.x = -this.velocity.x;
            this.velocity.y = 34;
        }
    }
}