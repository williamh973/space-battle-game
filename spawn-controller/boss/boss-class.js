import { canvasParam } from "../../canvasParam.js";
import { gameVariables } from "../../gameVariables.js";
import { bossGalacticPhoenixSpaceShip, createBossGalacticPhoenixSpaceShip } from "../alien/alien-assets.js";
import { AlienMissile } from "../missile/alien-missile-class.js";


export class Boss{
    constructor({position}) {
        this.position = {
            x: position.x + 2,
            y: position.y
        }
        this.velocity = {
            x: 0, 
            y: 0 
        }
        this.image = createBossGalacticPhoenixSpaceShip(bossGalacticPhoenixSpaceShip);
        this.width = 70;
        this.height = 100;
        this.scale = 1;
        this.life = 200;
    }

    draw(){
        if(this.image && !gameVariables.isGameOver) {
            canvasParam.c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width * this.scale,
                this.height * this.scale,
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
            gameVariables.alienMissiles.push(
                new AlienMissile({
                    position:{
                        x : this.position.x + this.width / 2 - 10,
                        y : this.position.y + this.height - 7
                    },
                    velocity: {
                        x : 0,
                        y : 20
                    },
                    width : 3,
                    height : 15,
                    color : "yellow"
                }),
                new AlienMissile({
                    position:{
                        x : this.position.x + this.width / 2 + 10,
                        y : this.position.y + this.height - 7
                    },
                    velocity: {
                        x : 0,
                        y : 20
                    },
                    width : 3,
                    height : 15,
                    color : "yellow"
                })
            )
        }
    }

    drawDebugCollisionSquare() {
        const ctx = canvasParam.c;
        ctx.beginPath();
        ctx.strokeStyle = 'green';
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
};