import { gameVariables } from "./gameVariables.js";
import { init } from "./init.js";


export const displayInterface = () => {
  gameVariables.scoreTag.innerText = "Score  " + gameVariables.score;
  gameVariables.lifeTag.innerText = "Lifes  " + gameVariables.lifes;
  gameVariables.missileTag.innerText = "Missiles  " + gameVariables.updateShoot;
  gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;
};

export const updateInvaderNumber = (grid) => {
    gameVariables.invader = grid.invaders.length;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;    
};

export const spawnMissile = () => {
    gameVariables.updateShoot += 1;
    gameVariables.missileTag.innerText = "Missiles  " + gameVariables.updateShoot;
};

export const addScore = () => {
    gameVariables.score += 1;
    gameVariables.scoreTag.innerText = "Score  " + gameVariables.score 
};

export const lostLife = () => {
    gameVariables.lifes -= 1;
    gameVariables.lifeTag.innerText = "Lifes  " + gameVariables.lifes;
};

export const substractInvaders = () => {
    gameVariables.invader -= 1;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;
};

