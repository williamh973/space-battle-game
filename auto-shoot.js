import { gameVariables } from "./game-variables.js";
import { increaseHudMissileShooted } from "./interface.js";

export const startAutoShootIfModActived = () => {
  if (gameVariables.isAutomaticalShootMod) {
    autoShoot();
  }
};

export const manualShoot = () => {
  if (!gameVariables.isAutomaticalShootMod) {
    gameVariables.player.shoot();
    increaseHudMissileShooted();
  } else {
    return;
  }
};

const autoShoot = () => {
  setInterval(() => {
    gameVariables.player.shoot();
    increaseHudMissileShooted();
  }, 500);
};
