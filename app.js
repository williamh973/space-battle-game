import { canvasParam } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";
import { init } from "./init.js";
import { checkAlienMissileOffscreenBottom, missilePlayerUpdate } from "./spawn-controller/missile/missile-update.js";
import { particleUpdate } from "./spawn-controller/particle/particle-update.js";
import { alienMissileFireRate } from "./spawn-controller/missile/alien-missile-fire-rate.js";
import { playerMissileCollideInvaders } from "./spawn-controller/missile/player-missile-collide.js";
import { gridLevel } from "./levels/levels.js";



init();


const animate = () => {
    canvasParam.c.clearRect( 0, 0, canvasParam.canvas.width, canvasParam.canvas.height);
    requestAnimationFrame(animate);
    
    gameVariables.grids.forEach((grid, indexGrid) => {
        grid.update();
        grid.drawDebugCollisionSquare();
        
        alienMissileFireRate(grid);
        
        grid.invaders.forEach((invader, indexI) => {
            invader.update({
                velocity : grid.velocity
            });
            
            playerMissileCollideInvaders(grid, invader, indexGrid, indexI);
        })
    })
    
    particleUpdate();
    missilePlayerUpdate();
    checkAlienMissileOffscreenBottom();
    
    gameVariables.player.update();
    gameVariables.frames++;
};
animate();
gridLevel();

