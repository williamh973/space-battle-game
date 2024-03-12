import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";
import { keys } from "../../keywords.js";
import { Missile } from "../missile/player-missile-class.js";

export class Player {
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
        this.isVelocityBoosted = false;
        this.isTrippleMissilesEffect = false;
    }

    draw() {
        if (this.image && !gameVariables.isGameOver && !gameVariables.isPlayerWin) {
            canvasParam.c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            );       
        }
    }

    shoot() {
        if (!gameVariables.isGameOver && !gameVariables.isPlayerWin && !this.isTrippleMissilesEffect) {   
            gameVariables.missiles.push(new Missile({
                position: {
                    x: this.position.x + this.width / 2,
                    y: this.position.y
                },  
                velocity: {
                    x: 0,
                    y: -5
                },
                color: 'blue',
                shadowBlur: 'cyan'
            }));
        } else if (!gameVariables.isGameOver && !gameVariables.isPlayerWin && this.isTrippleMissilesEffect) {   
            gameVariables.missiles.push(new Missile({
                position: {
                    x: this.position.x + this.width / 2,
                    y: this.position.y
                },
                velocity: {
                    x: -0.5,
                    y: -8
                },
                color: 'purple',
                shadowBlur: 'pink'
            }));
            gameVariables.missiles.push(new Missile({
                position: {
                    x: this.position.x + this.width / 2,
                    y: this.position.y
                },  
                velocity: {
                    x: 0,
                    y: -8
                },
                color: 'purple',
                shadowBlur: 'pink'
            }));
            gameVariables.missiles.push(new Missile({
                position: {
                    x: this.position.x + this.width / 2,
                    y: this.position.y
                },
                velocity: {
                    x: 0.5,
                    y: -8
                },
                color: 'purple',
                shadowBlur: 'pink'
            }));
        }
    }

    velocityBoosted() {
        return (
            this.isVelocityBoosted = true,
            setTimeout(() => {
                this.isVelocityBoosted = false;
            }, 10000)
        );
    }

    shootBoosted() {
        return (
            this.isTrippleMissilesEffect = true,
            setTimeout(() => {
                this.isTrippleMissilesEffect = false;
            }, 10000)
        );
    }

    update() {
        if (this.image && !this.isVelocityBoosted) {
            if ((keys.ArrowLeft.pressed || keys.q.pressed) && this.position.x >= 10) {
                this.velocity.x = -5;
            } else if ((keys.ArrowRight.pressed || keys.d.pressed) && this.position.x <= canvasParam.canvas.width - this.width - 10) {
                this.velocity.x = 5;
            } else {
                this.velocity.x = 0;
            }
            this.position.x += this.velocity.x;
            this.draw();
        } else if (this.image && this.isVelocityBoosted) {
            if ((keys.ArrowLeft.pressed || keys.q.pressed) && this.position.x >= 10) {
                this.velocity.x = -8;
            } else if ((keys.ArrowRight.pressed || keys.d.pressed) && this.position.x <= canvasParam.canvas.width - this.width - 10) {
                this.velocity.x = 8;
            } else {
                this.velocity.x = 0;
            }
            this.position.x += this.velocity.x;
            this.draw();
        }
    }
}