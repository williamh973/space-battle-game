import { gameVariables } from "../game-variables.js";
import { auroraTitanSpaceShip, blueSpaceShip, createPlayerAuroraTitanSpaceShip, createPlayerBlueSpaceShip, createPlayerInterceptorAlphaSpaceShip, createPlayerWhiteSpaceShip, interceptorAlphaSpaceShip, whiteSpaceShip } from "../spawn-controller/player/player-assets.js";


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
              case 'interceptor-alpha':
                gameVariables.playerSpaceShipPreview.appendChild(interceptorAlphaSpaceShip);
                gameVariables.spaceshipName = createPlayerInterceptorAlphaSpaceShip(interceptorAlphaSpaceShip);
                  break;      
                  case 'aurora-titan':
                    gameVariables.playerSpaceShipPreview.appendChild(auroraTitanSpaceShip);
                    gameVariables.spaceshipName = createPlayerAuroraTitanSpaceShip(auroraTitanSpaceShip);
                    break;   
      };
};