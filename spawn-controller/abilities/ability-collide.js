import { gameVariables } from "../../game-variables.js"
import { addPlayerLife, addPlayerTrippleMissile, addPlayerVelocity } from "../../interface.js";


export const playerCollideAbilities = (player) => { 
    gameVariables.abilityList.forEach((ability, indexA) => {
        if(
           player.position.y <= ability.position.y + ability.height &&
           player.position.y >= ability.position.y  &&
           player.position.x + player.width >= ability.position.x &&
           player.position.x - player.width <= ability.position.x + ability.width
           ) {
            playerTakeAbility(player, ability, indexA);
        }
    })
};

const playerTakeAbility = (player, ability, indexA) => {
    gameVariables.abilityList.splice(indexA, 1);
   
    switch (ability.name) {
        case 'health':
            addPlayerLife();    
            break;
            case 'speed' :
                addPlayerVelocity(player);
                break;
                case 'triple' :
                    addPlayerTrippleMissile(player);
                   break;
        default:
            break;
    };

};