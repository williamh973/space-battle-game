import { animate } from "./app.js";
import { canvasPreview, playerPreview } from "./canvas-preview.js";
import { selectedCanvasColor } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";
import { init } from "./init.js";


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
    gameVariables.missileTag.innerText = "Missiles  " + gameVariables.updateShoot;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;
    gameVariables.levelTag.innerText = "Level  " + gameVariables.level;
};

export const startGame = (selectedColor) => {
    if (!gameVariables.isGameStarted) {
        displayGameStat();
        init();
        animate(selectedColor);
  }
  gameVariables.isGameStarted = true;
};


export const updateInvaderNumber = (grid) => {
    gameVariables.invader = grid.invaders.length;
    gameVariables.invaderTag.innerText = "Invaders  " + gameVariables.invader;    
};

export const updateLevelNumber = () => {
    gameVariables.level += 1;
    gameVariables.levelTag.innerText = "Level  " + gameVariables.level;
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


gameVariables.startButton.addEventListener("click", function() { 
    const selectedColor = gameVariables.selectColorCanvas.value;
    startGame(selectedColor);
});


  gameVariables.selectColorCanvas.addEventListener("change", function() {
      const selectedColor = gameVariables.selectColorCanvas.value;
      
      selectedCanvasColor(selectedColor);
      canvasPreview(selectedColor); 
      gameVariables.isColorCanvasSelected = true;
      readyToStart();
  }); 

  gameVariables.selectImagePlayer.addEventListener("change", function() {
    playerPreview(); 
    console.log("ok");
    gameVariables.isPlayerSpaceShipSelected = true;
      readyToStart();
}); 

gameVariables.selectImageAlien.addEventListener("change", function() {
    gameVariables.isAlienSpaceShipSelected = true;
      readyToStart();
}); 