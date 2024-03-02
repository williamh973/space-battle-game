import { gameVariables } from "../gameVariables.js";
import { createAlienOrangeSpaceShip, createAlienPurpleSpaceShip, createAlienRedSpaceShip, orangeAlienSpaceShip, purpleAlienSpaceShip, redAlienSpaceShip } from "../spawn-controller/alien/alien-assets.js";


export const handleAlienSpaceshipSelect = (selectedSpaceship) => {
  
    gameVariables.alienSpaceShipPreview.innerHTML = ''; 
        
      switch (selectedSpaceship) {
          case 'red':
            gameVariables.alienSpaceShipPreview.appendChild(redAlienSpaceShip);
            gameVariables.alienSpaceshipName = createAlienRedSpaceShip(redAlienSpaceShip);
            break;
          case 'orange':
            gameVariables.alienSpaceShipPreview.appendChild(orangeAlienSpaceShip);
            gameVariables.alienSpaceshipName = createAlienOrangeSpaceShip(orangeAlienSpaceShip);
            break;
            case 'purple':
              gameVariables.alienSpaceShipPreview.appendChild(purpleAlienSpaceShip);
              gameVariables.alienSpaceshipName = createAlienPurpleSpaceShip(purpleAlienSpaceShip);
              break;
      };
};