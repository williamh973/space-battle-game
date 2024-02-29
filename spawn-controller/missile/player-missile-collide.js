import { gameVariables } from "../../gameVariables.js";
import { adStock } from "../../interface.js";
import { Grid } from "../grid/grid-class.js";
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
          adStock();
          setTimeout(() => {
              grid.invaders.splice(indexI,1);
              gameVariables.missiles.splice(indexM,1)
              if(grid.invaders.length === 0 && gameVariables.grids.length == 1 && gameVariables.stock !== 10 ) {
                  gameVariables.grids.splice(indexGrid,1);
                  gameVariables.grids.push(new Grid());
              }
              if(grid.invaders.length === 0 && gameVariables.grids.length == 1 && gameVariables.stock >= 10 ) {
                  gameVariables.grids.splice(indexGrid,1);
                  gameVariables.grids.push(new Grid());
              }
          },0)
      }
  })
};