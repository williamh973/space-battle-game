import { canvasParam } from "../../../../canvas-parameters.js";

export class HealthAbilityParticle {
  constructor({ position, radius, color, shadowColor, shadowBlur }) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.opacity = 1;
    this.shadowColor = shadowColor;
    this.shadowBlur = shadowBlur;
  }

  draw() {
    canvasParam.c.save();
    canvasParam.c.globalAlpha = this.opacity;
    canvasParam.c.shadowColor = this.shadowColor;
    canvasParam.c.shadowBlur = this.shadowBlur;
    canvasParam.c.beginPath();
    canvasParam.c.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 10
    );
    canvasParam.c.strokeStyle = this.color;
    canvasParam.c.lineWidth = 10;
    canvasParam.c.stroke();
    canvasParam.c.closePath();
    canvasParam.c.restore();
  }

  update() {
    if (this.opacity > 0) {
      this.opacity -= 0.01;
    }
    this.draw();
  }
}
