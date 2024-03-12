import { canvasParam } from "../../../../canvas-parameters.js";

export class TrippleAbilityParticle {
    constructor({ position, radius, color, speed, life }) {
        this.position = position;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.life = life;
        this.opacity = 1;
    }

    draw() {
        canvasParam.c.save();
        canvasParam.c.globalAlpha = this.opacity;
        canvasParam.c.fillStyle = this.color;
        canvasParam.c.beginPath();
        canvasParam.c.arc(
            this.position.x, 
            this.position.y, 
            this.radius, 
            0, 
            Math.PI * 2
            );
        canvasParam.c.fill();
        canvasParam.c.closePath();
        canvasParam.c.restore();
    }

    update() {
        this.opacity -= 0.01;
        this.position.y -= this.speed;
        this.life--;

        if (this.life <= 0) {
            this.opacity = 0;
        }

        this.draw();
    }
}