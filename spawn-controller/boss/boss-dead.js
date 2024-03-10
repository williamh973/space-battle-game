import { gameVariables } from "../../game-variables.js";
import { addScore, substractInvaders } from "../../interface.js";

export const checkIfBossKo = (invader, grid, indexGrid, indexI) => {
    if (invader.life <= 0) {
        gameVariables.isBossDead = true;
        gameVariables.grids.splice(indexGrid, 1);
        grid.invaders.splice(indexI, 1);
        addScore();
        substractInvaders();  
        gameVariables.isEndGame = true;
    }
}