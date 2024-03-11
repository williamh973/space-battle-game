import { gameVariables } from "../../game-variables.js";
import { addScore, substractBossLife, substractInvaders, updateLevelNumber } from "../../interface.js";
import { spawnRandomAbilities } from "../abilities/ability-spawn.js";
import { checkIfBossKo } from "../boss/boss-dead.js";
import { spawnBossGrid, spawnNewGrid } from "../grid/spawn-grid.js";
import { spawnParticles } from "../particle/particle-spawn.js";



export const playerMissileCollideInvaders = (
    grid, 
    invader, 
    indexGrid, 
    indexI
    ) => { 
  gameVariables.missiles.forEach((missile, indexM) => {
      if(
         missile.position.y <= invader.position.y + invader.height &&
         missile.position.y >= invader.position.y  &&
         missile.position.x + missile.width >= invader.position.x &&
         missile.position.x - missile.width <= invader.position.x + invader.width
         ) {
             spawnParticles(invader);
             gameVariables.missiles.splice(indexM, 1);

             if (!gameVariables.isBossLevel) {
                    spawnRandomAbilities(invader);
                    grid.invaders.splice(indexI, 1);
                    addScore();
                    substractInvaders();
                    updateLevelNumber(grid);
                } else {
                    substractBossLife(invader); 
                    checkIfBossKo(invader, grid, indexGrid, indexI);
                }
             
             
             setTimeout(() => {
                    if (gameVariables.level <= 49) {
                        spawnNewGrid(grid, indexGrid);
                    } else {
                        spawnBossGrid(grid, indexGrid);
                    }
          },0)
      }
  })
};
