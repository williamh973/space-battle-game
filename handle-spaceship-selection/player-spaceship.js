import { gameVariables } from "../gameVariables.js";
import { blueSpaceShip, createPlayerBlueSpaceShip, createPlayerWhiteSpaceShip, whiteSpaceShip } from "../spawn-controller/player/player-assets.js";


export const handlePlayerSpaceshipSelect = (selectedSpaceship) => {
  
    gameVariables.playerSpaceShipPreview.innerHTML = ''; 
        
      switch (selectedSpaceship) {
        case 'blue':
        gameVariables.playerSpaceShipPreview.appendChild(blueSpaceShip); 
        gameVariables.spaceshipName = createPlayerBlueSpaceShip(blueSpaceShip);
          break;
          case 'white':
            gameVariables.playerSpaceShipPreview.appendChild(whiteSpaceShip);
            gameVariables.spaceshipName = createPlayerWhiteSpaceShip(whiteSpaceShip);
              break;
      };
};