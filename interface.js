import { animate } from "./animate.js";
import { canvasPreview } from "./canvas-preview.js";
import { selectedCanvasColor } from "./canvas-parameters.js";
import { gameVariables } from "./game-variables.js";
import { handleAlienSpaceshipSelect } from "./handle-spaceship-selection/alien-spaceship.js";
import { handlePlayerSpaceshipSelect } from "./handle-spaceship-selection/player-spaceship.js";
import { init } from "./init.js";
import { selectedStarColor } from "./spawn-controller/stars/stars-manager.js";
import { startAutoShootIfModActived } from "./auto-shoot.js";


const disableStartButton = () => {
    gameVariables.startButton.disabled = true;
    gameVariables.startButton.style.backgroundColor = 'grey';
    gameVariables.startButton.style.cursor = 'default';
};


const enableStartButton = () => {
    gameVariables.startButton.disabled = false;
    gameVariables.startButton.style.backgroundColor = 'rgba(0, 255, 26, 0.592)';
    gameVariables.startButton.style.cursor = 'pointer';
};

const toggleAutoShootButton = () => {
    if (gameVariables.isAutomaticalShootMod) {   
        gameVariables.autoShootButton.style.backgroundColor = 'rgba(0, 255, 26, 0.592)';
        gameVariables.autoShootButton.style.border = 'none';
    } else {
        gameVariables.autoShootButton.style.backgroundColor = 'transparent';
        gameVariables.autoShootButton.style.border = '1px solid white';
    }
};

const beforeStart = () => {
    disableStartButton();
};
beforeStart();


const readyToStart = () => {
    if (
        gameVariables.isColorCanvasSelected &&
        gameVariables.isPlayerSpaceShipSelected &&
        gameVariables.isAlienSpaceShipSelected
        ) {
        enableStartButton();
    }
};



export const displayGameStat = () => {
    gameVariables.scoreTag.innerText = "Score  " + gameVariables.score;
    gameVariables.lifeTag.innerText = "Lifes  " + gameVariables.lifes;
    gameVariables.missileTag.innerText = "Missiles  " + gameVariables.missileShooted;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;
    gameVariables.levelTag.innerText = "Level  " + gameVariables.level;
};

export const startGame = (selectedColor) => {
    if (!gameVariables.isGameStarted) {
        displayGameStat();
        init();
        animate(selectedColor);
        startAutoShootIfModActived();
  }
};


export const updateInvaderNumber = (grid) => {
    gameVariables.invader = grid.invaders.length;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;    
};

export const updateLevelNumber = (grid) => {
    if(grid.invaders.length === 0 && gameVariables.grids.length === 1) {
       gameVariables.level += 1;
       gameVariables.levelTag.innerText = "Level  " + gameVariables.level;
    };
};

export const increaseHudMissileShooted = () => {
    gameVariables.missileShooted += 1;
    gameVariables.missileTag.innerText = "Missiles  " + gameVariables.missileShooted;
};

export const addScore = () => {
    gameVariables.score += 1;
    gameVariables.scoreTag.innerText = "Score  " + gameVariables.score 
};

export const addPlayerLife = () => {
    gameVariables.lifes += 1;
    gameVariables.lifeTag.innerText = "Lifes  " + gameVariables.lifes;
};

export const addPlayerVelocity = (player) => {
    player.velocityBoosted();
};

export const addPlayerTrippleMissile = (player) => {
    player.shootBoosted();
}

export const substractPlayerLife = () => {
    gameVariables.lifes -= 1;
    gameVariables.lifeTag.innerText = "Lifes  " + gameVariables.lifes;
};

export const substractBossLife = (invader) => {
    invader.life -= 1;
};

export const substractInvaders = () => {
    gameVariables.invader -= 1;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;
};


gameVariables.startButton.addEventListener("click", function() { 
    const selectedColor = gameVariables.selectColorCanvas.value;
    startGame(selectedColor);
});


gameVariables.autoShootButton.addEventListener("click", function() {
    gameVariables.isAutomaticalShootMod = !gameVariables.isAutomaticalShootMod;
    toggleAutoShootButton(); 
});


  gameVariables.selectColorCanvas.addEventListener("change", function() {
      const selectedColor = gameVariables.selectColorCanvas.value;
      const starColor = gameVariables.starColor;
      selectedCanvasColor(selectedColor);
      selectedStarColor(selectedColor, starColor);
      canvasPreview(selectedColor); 
      gameVariables.isColorCanvasSelected = true;
      readyToStart();
  }); 

  gameVariables.selectImagePlayer.addEventListener("change", function() {
    const selectedSpaceship = gameVariables.selectImagePlayer.value;
    handlePlayerSpaceshipSelect(selectedSpaceship);
    gameVariables.isPlayerSpaceShipSelected = true;
    readyToStart();
  }); 

  gameVariables.selectImageAlien.addEventListener("change", function() {
      const selectedSpaceship = gameVariables.selectImageAlien.value;
      handleAlienSpaceshipSelect(selectedSpaceship);
      gameVariables.isAlienSpaceShipSelected = true;
      readyToStart();
  }); 



