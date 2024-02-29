import { canvasParam } from "../../canvasParam.js";
import { gameVariables } from "../../gameVariables.js";
import { keys } from "../../keywords.js";
import { Missile } from "../missile/player-missile-class.js";

export class Player{
    constructor() {
        const image = new Image();
        image.src = './assets/images/player-aircraft.png';
        this.image = image;
        this.width = 40; 
        this.height = 40; 
        this.position = {
            x: canvasParam.canvas.width / 2, 
            y: canvasParam.canvas.height - this.height
        }
        this.velocity = {
            x: 0, 
            y: 0
        }
    }

    draw(){
        canvasParam.c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    shoot(){
        gameVariables.missiles.push(new Missile({
            position:{
                x: this.position.x + this.width/2,
                y: this.position.y
            },  
        }));
    }

   update(){
       if(this.image){
           if (
            (keys.ArrowLeft.pressed && this.position.x >= 0) ||
            (keys.q.pressed && this.position.x >= 0) 
            ){
               this.velocity.x = -5;

            } else if (
                (keys.ArrowRight.pressed && this.position.x <= canvasParam.canvas.width - this.width) || 
                (keys.d.pressed && this.position.x <= canvasParam.canvas.width - this.width)
                ){
                this.velocity.x = 5;
            } else{
                this.velocity.x = 0;
            }
            this.position.x += this.velocity.x;
            this.draw();
        }
    };
} 