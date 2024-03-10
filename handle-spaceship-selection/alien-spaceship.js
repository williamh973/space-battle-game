import { gameVariables } from "../game-variables.js";
import { createAlienOrangeSpaceShip, createAlienPurpleSpaceShip, createAlienRedSpaceShip, createAlienStarfireSentinelSpaceShip, orangeAlienSpaceShip, purpleAlienSpaceShip, redAlienSpaceShip, starfireSentinelAlienSpaceShip } from "../spawn-controller/alien/alien-assets.js";


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
            case 'starfire-sentinel':
              gameVariables.alienSpaceShipPreview.appendChild(starfireSentinelAlienSpaceShip);
              gameVariables.alienSpaceshipName = createAlienStarfireSentinelSpaceShip(starfireSentinelAlienSpaceShip);
              break;
      };
};