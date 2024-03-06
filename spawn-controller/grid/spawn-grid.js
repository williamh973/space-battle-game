import { gameVariables } from "../../gameVariables.js";
import { GridBoss } from "./grid-boss-class.js";
import { Grid } from "./grid-invaders-class.js";


export const spawnNewGrid = (grid, indexGrid) => {
    if(grid.invaders.length === 0 && gameVariables.grids.length === 1) {
        gameVariables.grids.splice(indexGrid, 1);
        gameVariables.grids.push(new Grid());
    }
};
           
export const spawnBossGrid = (gridBoss, indexGrid) => {
    if(gridBoss.invaders.length === 0 && gameVariables.gridsBoss.length === 1) {
      
      setTimeout(() => {
        gameVariables.isBossLevel = true;
        gameVariables.gridsBoss.splice(indexGrid, 1);
        gameVariables.gridsBoss.push(new GridBoss());  
        // gridBoss.invaders.drawDebugCollisionSquare();
        console.log(gameVariables.gridsBoss)
      }, 3000);
    }
};
 