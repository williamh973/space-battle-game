import { canvasParam } from "../../canvas-parameters.js";
import { gameVariables } from "../../game-variables.js";
import { alienMissileCollidePlayer } from "./alien-missile-collide.js";

export const missilePlayerUpdate = () => {
  gameVariables.missiles.forEach((missile, index) => {
    if (missile.position.y + missile.height <= 0) {
      setTimeout(() => {
        gameVariables.missiles.splice(index, 1);
      }, 0);
    } else {
      missile.update();
    }
  });
};

export const checkAlienMissileOffscreenBottom = () => {
  gameVariables.alienMissiles.forEach((alienMissile, index) => {
    if (
      alienMissile.position.y + alienMissile.height >=
      canvasParam.canvas.height
    ) {
      gameVariables.alienMissiles.splice(index, 1);
    } else {
      alienMissile.update();
    }
    alienMissileCollidePlayer(alienMissile, gameVariables.player);
  });
};
