import { gameVariables } from "../../game-variables.js";



export const alienMissileFireRate = (grid) => {
    if (gameVariables.frames % 50 === 0 && grid.invaders.length > 0) {
        grid.invaders[
            Math.floor(Math.random() * (grid.invaders.length))
        ].shoot(gameVariables.alienMissiles)
    }
};