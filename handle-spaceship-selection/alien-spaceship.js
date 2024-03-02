import { gameVariables } from "../gameVariables.js";
import { createAlienRedSpaceShip, redAlienSpaceShip } from "../spawn-controller/alien/alien-assets.js";


export const handleAlienSpaceshipSelect = (selectedSpaceship) => {
  
    gameVariables.alienSpaceShipPreview.innerHTML = ''; 
        
      switch (selectedSpaceship) {
          case 'red':
            gameVariables.alienSpaceShipPreview.appendChild(redAlienSpaceShip);
            gameVariables.alienSpaceshipName = createAlienRedSpaceShip(redAlienSpaceShip);
            break;
      };
};