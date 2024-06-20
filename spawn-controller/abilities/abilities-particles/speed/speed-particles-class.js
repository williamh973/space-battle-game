import { canvasParam } from "../../../../canvas-parameters.js";

export class SpeedAbilityParticle {
  constructor({
    position,
    length,
    color,
    thickness,
    speed,
    shadowColor,
    shadowBlur,
  }) {
    this.position = position;
    this.length = length;
    this.color = color;
    this.thickness = thickness;
    this.speed = speed;
    this.shadowColor = shadowColor;
    this.shadowBlur = shadowBlur;
    this.angle = 0;
    this.opacity = 1;
  }

  draw() {
    canvasParam.c.save();
    canvasParam.c.globalAlpha = this.opacity;
    canvasParam.c.strokeStyle = this.color;
    canvasParam.c.lineWidth = this.thickness;
    canvasParam.c.shadowColor = this.shadowColor;
    canvasParam.c.shadowBlur = this.shadowBlur;
    canvasParam.c.beginPath();
    const endPointX = this.position.x + Math.cos(this.angle) * this.length;
    const endPointY = this.position.y + Math.sin(this.angle) * this.length;
    canvasParam.c.moveTo(this.position.x, this.position.y);
    canvasParam.c.lineTo(endPointX, endPointY);
    canvasParam.c.stroke();
    canvasParam.c.closePath();
    canvasParam.c.restore();
  }

  update() {
    if (this.opacity > 0) {
      this.opacity -= 0.01;
    }
    this.angle += this.speed;
    this.draw();
  }
}
