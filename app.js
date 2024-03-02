import { canvasParam, selectedCanvasColor } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";
import { checkAlienMissileOffscreenBottom, missilePlayerUpdate } from "./spawn-controller/missile/missile-update.js";
import { particleUpdate } from "./spawn-controller/particle/particle-update.js";
import { alienMissileFireRate } from "./spawn-controller/missile/alien-missile-fire-rate.js";
import { playerMissileCollideInvaders } from "./spawn-controller/missile/player-missile-collide.js";
import { updateInvaderNumber } from "./interface.js";
import { checkIfGameOver } from "./game-over.js";

  
  export const animate = (selectedColor) => {
      requestAnimationFrame(animate);

      selectedCanvasColor(selectedColor);

        canvasParam.c.fillStyle = selectedColor;
        
        canvasParam.c.clearRect(
            0, 
            0, 
            canvasParam.canvas.width, 
            canvasParam.canvas.height
            );
            
        canvasParam.c.fillRect(
            0,
            0,
            canvasParam.canvas.width,
            canvasParam.canvas.height
            );

        gameVariables.grids.forEach((grid, indexGrid) => {
            updateInvaderNumber(grid);
            alienMissileFireRate(grid);
            grid.update();
    
    
            grid.invaders.forEach((invader, indexI) => {
                invader.update({
                    velocity : grid.velocity
                });
                checkIfGameOver(invader);
                playerMissileCollideInvaders(grid, invader, indexGrid, indexI);
            })
        })
        
        particleUpdate();
        missilePlayerUpdate();
        checkAlienMissileOffscreenBottom();
        
        gameVariables.player.update();
        gameVariables.frames++;
    };
    


