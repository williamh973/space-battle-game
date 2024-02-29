import { gameVariables } from "./gameVariables.js";
import { Grid } from "./spawn-controller/grid/grid-class.js";
import { Player } from "./spawn-controller/player/player-class.js";


export const init = () => {
    gameVariables.missiles = [];
    gameVariables.alienMissiles = []; 
    gameVariables.particules = [];
    gameVariables.lifes = 3;
    gameVariables.scoreTag = document.getElementById('score');
    gameVariables.lifeTag = document.getElementById('vie');
    gameVariables.tirTag = document.getElementById('tir');
    gameVariables.vie = 1;
    gameVariables.score = 0;
    gameVariables.majTir = 1
    gameVariables.player = new Player(); 
    gameVariables.grids = [new Grid()];
};
