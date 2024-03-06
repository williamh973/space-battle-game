export const gameVariables = {
  missiles : [],
  alienMissiles : [], 
  grids : [],
  gridsBoss : [],
  particules : [],
  frames : 0,
  lifes : 3,
  level : 1,
  invader : 0,
  score : 0,
  missileShooted : 0,
  isGameStarted : false,
  isGameOver : false, 
  isPlayerWin : false,
  isStartButton : false,
  isColorCanvasSelected : false,
  isPlayerSpaceShipSelected : false,
  isAlienSpaceShipSelected : false,
  isBossLevel : false,
  isBossDead : false,
  isEndGame : false,
  scoreTag : document.getElementById('score'),
  levelTag : document.getElementById('level'),
  lifeTag : document.getElementById('life'),
  missileTag : document.getElementById('shoot'),
  invaderTag : document.getElementById('invaders'),
  containerStart : document.getElementById('container-start'),
  startButton : document.getElementById('btn-start'),
  customMenu : document.getElementById('custom-menu'),
  selectColorCanvas : document.getElementById('child-color-canvas-menu'),
  selectImagePlayer : document.getElementById('child-player-menu'), 
  selectImageAlien : document.getElementById('child-alien-menu'), 
  hud : document.getElementById('hud'),
  playerSpaceShipPreview : document.getElementById('player-spaceship-preview'),
  alienSpaceShipPreview : document.getElementById('alien-spaceship-preview'),
};


