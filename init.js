import { gameVariables } from "./gameVariables.js";
import { Grid } from "./spawn-controller/grid/grid-class.js";
import { Player } from "./spawn-controller/player/player-class.js";


export const init = () => {
    gameVariables.isCustomMenu = false;
    gameVariables.isStartButton = false;
    gameVariables.missiles = [];
    gameVariables.alienMissiles = []; 
    gameVariables.particules = [];
    gameVariables.lifes = 3;
    gameVariables.level = 1;
    gameVariables.scoreTag = document.getElementById('score');
    gameVariables.lifeTag = document.getElementById('life');
    gameVariables.missileTag = document.getElementById('shoot');
    gameVariables.score = 0;
    gameVariables.updateShoot = 1;
    gameVariables.player = new Player(); 
    gameVariables.grids = [new Grid()];
    gameVariables.containerStart.style.display = "none";
    gameVariables.customMenu.style.display = 'none';
    gameVariables.hud.style.display = "flex";
};
