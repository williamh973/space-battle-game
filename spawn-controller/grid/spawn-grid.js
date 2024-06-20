import { gameVariables } from "../../game-variables.js";
import { Grid } from "./grid-invaders-class.js";

export const spawnNewGrid = (grid, indexGrid) => {
  if (grid.invaders.length === 0 && gameVariables.grids.length === 1) {
    gameVariables.grids.splice(indexGrid, 1);
    gameVariables.grids.push(new Grid());
  }
};

export const spawnBossGrid = (grid, indexGrid) => {
  if (grid.invaders.length === 0 && gameVariables.grids.length === 1) {
    setTimeout(() => {
      gameVariables.isBossLevel = true;
      gameVariables.grids.splice(indexGrid, 1);
      gameVariables.grids.push(new Grid());
    }, 3000);
  }
};
