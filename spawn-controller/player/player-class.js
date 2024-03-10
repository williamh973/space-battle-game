import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";
import { keys } from "../../keywords.js";
import { Missile } from "../missile/player-missile-class.js";


export class Player{
    constructor() {
        this.width = 35; 
        this.height = 40; 
        this.position = {
            x: canvasParam.canvas.width / 2, 
            y: canvasParam.canvas.height - this.height
        };
        this.velocity = {
            x: 0, 
            y: 0
        };
        this.image = gameVariables.spaceshipName;
    }

    draw(){
        if(this.image && !gameVariables.isGameOver && !gameVariables.isPlayerWin) {
            canvasParam.c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );       
        }
    }

    shoot(){
        if (!gameVariables.isGameOver && !gameVariables.isPlayerWin) {   
            gameVariables.missiles.push(new Missile({
                position:{
                    x: this.position.x + this.width/2,
                    y: this.position.y
                },  
            }));
        }
    }

   update(){
       if(this.image){
           if (
            (keys.ArrowLeft.pressed && this.position.x >= 10) ||
            (keys.q.pressed && this.position.x >= 10) 
            ){
               this.velocity.x = -5;

            } else if (
                (keys.ArrowRight.pressed && this.position.x <= canvasParam.canvas.width - this.width - 10) || 
                (keys.d.pressed && this.position.x <= canvasParam.canvas.width - this.width - 10)
                ){
                this.velocity.x = 5;
            } else{
                this.velocity.x = 0;
            }
            this.position.x += this.velocity.x;
            this.draw();
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