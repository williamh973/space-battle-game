import { gameVariables } from "./game-variables.js";
import { Grid } from "./spawn-controller/grid/grid-invaders-class.js";
import { Player } from "./spawn-controller/player/player-class.js";


export const init = () => {
    gameVariables.missiles = [];
    gameVariables.alienMissiles = []; 
    gameVariables.particules = [];
    gameVariables.lifes = 3;
    gameVariables.level = 1;
    gameVariables.score = 0;
    gameVariables.missileShooted = 0;
    gameVariables.invader = 0;
    gameVariables.isGameStarted = true;
    gameVariables.startButton.disabled = true;
    gameVariables.isGameOver = false;
    gameVariables.isPlayerWin = false;
    gameVariables.isStartButton = false;
    gameVariables.isBossLevel = false;
    gameVariables.isBossDead = false;
    gameVariables.player = new Player(); 
    gameVariables.grids = [new Grid()];
    gameVariables.containerStart.style.display = "none";
    gameVariables.customMenu.style.display = 'none';
    gameVariables.hud.style.display = "flex";
};
