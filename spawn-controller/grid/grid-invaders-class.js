import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";
import { Alien } from "../alien/alien-class.js";
import { Boss } from "../boss/boss-class.js";

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
        this.invaders = []; 
        const alienMinimumNumberInGrid = 1;
        const relativeValueForIncreaseAlienInColums = 4;
        const relativeValueForIncreaseAlienInRows = 10;

        this.colums = Math.round(alienMinimumNumberInGrid + gameVariables.level / relativeValueForIncreaseAlienInColums);
        this.rows = Math.round(alienMinimumNumberInGrid + gameVariables.level / relativeValueForIncreaseAlienInRows);
        this.scale = 35;        
        this.draw();
    }

    draw() {
        if (gameVariables.level <= 59) { 
            this.width = this.colums * this.scale;
            this.height = this.rows * this.scale;

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
        } else  if (gameVariables.level === 60) {
            const bossWidth = 70;
            const bossHeight = 100;

            this.width = bossWidth;
            this.height = bossHeight;
            
            for (let x = 0; x < 1; x++) {
                for (let y = 0; y < 1; y++) {
                    this.invaders.push(new Boss({
                        position:{
                            x : x,
                            y : y
                        }
                    }))
                }
            }
        }    
    }
    
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y; 
        this.velocity.y = 0;
        this.movements()
    }
    
    movements() {
      if (
          (this.position.x + this.width  >= canvasParam.canvas.width) || 
          (this.position.x === 0)
          ) {
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