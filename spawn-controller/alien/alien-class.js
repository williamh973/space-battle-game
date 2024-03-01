import { canvasParam } from "../../canvasParam.js";
import { drawTextGameOver } from "../../game-over.js";
import { gameVariables } from "../../gameVariables.js";
import { AlienMissile } from "../missile/alien-missile-class.js";

export class Alien{
    constructor({position}){
        this.position = {
            x: position.x,
            y: position.y
        }
        this.velocity = {
            x: 0, 
            y: 0 
        }
        const image = new Image();
        image.src = './assets/images/alien-aircraft.png';
        image.onload = () => {
            this.image = image;
            this.width = 32;
            this.height = 32;
        }
    }

    draw(){
        if(this.image && !gameVariables.isGameOver) {
            canvasParam.c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
            );       
        }
    }

    update({velocity}) {
        if(this.image) {
          this.position.x += velocity.x;
          this.position.y += velocity.y;
        }
        this.draw();
    }
    
    shoot() {
        if(this.position && !gameVariables.isGameOver) {
            gameVariables.alienMissiles.push(new AlienMissile({
                position:{
                    x: this.position.x,
                    y: this.position.y
                },
                velocity: {
                    x: 0,
                    y: 3
                }
            }))
        }
    }
};