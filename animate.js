import { canvasParam, selectedCanvasColor } from "./canvas-parameters.js";
import { gameVariables } from "./game-variables.js";
import {
  checkAlienMissileOffscreenBottom,
  missilePlayerUpdate,
} from "./spawn-controller/missile/missile-update.js";
import { particleUpdate } from "./spawn-controller/particle/particle-update.js";
import { alienMissileFireRate } from "./spawn-controller/missile/alien-missile-fire-rate.js";
import { playerMissileCollideInvaders } from "./spawn-controller/missile/player-missile-collide.js";
import { updateInvaderNumber } from "./interface.js";
import { checkIfGameOver } from "./game-over.js";
import { checkIfPlayerWin } from "./victory.js";
import { drawStars } from "./spawn-controller/stars/stars-manager.js";
import { playerCollideAbilities } from "./spawn-controller/abilities/ability-collide.js";
import { objectMovement } from "./objects-movements/objects-movement.js";

export const animate = (selectedColor) => {
  requestAnimationFrame(animate);

  selectedCanvasColor(selectedColor);

  canvasParam.c.fillStyle = selectedColor;

  if (!gameVariables.isEndGame) {
    canvasParam.c.clearRect(
      0,
      0,
      canvasParam.canvas.width,
      canvasParam.canvas.height
    );
  }

  canvasParam.c.fillRect(
    0,
    0,
    canvasParam.canvas.width,
    canvasParam.canvas.height
  );

  drawStars();

  gameVariables.grids.forEach((grid, indexGrid) => {
    updateInvaderNumber(grid);
    alienMissileFireRate(grid);
    grid.update();

    grid.invaders.forEach((invader, indexI) => {
      invader.update({
        velocity: grid.velocity,
      });
      checkIfGameOver(invader);
      playerMissileCollideInvaders(grid, invader, indexGrid, indexI);
    });
  });

  particleUpdate();
  missilePlayerUpdate();
  checkAlienMissileOffscreenBottom();
  playerCollideAbilities(gameVariables.player);

  if (gameVariables.isEndGame) {
    checkIfPlayerWin();
  }

  gameVariables.abilityList.forEach((ability) => {
    ability.update();
  });

  gameVariables.player.update();
  objectMovement(gameVariables.player);

  gameVariables.frames++;
};
