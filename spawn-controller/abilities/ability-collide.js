import { gameVariables } from "../../game-variables.js";
import { addPlayerLife, addPlayerTrippleMissile, addPlayerVelocity } from "../../interface.js";
import { spawnHealthAbilityParticles } from "./abilities-particles/health/health-particle-spawn.js";
import { spawnSpeedAbilityParticles } from "./abilities-particles/speed/speed-particle-spawn.js";
import { spawnTrippleAbilityParticles } from "./abilities-particles/tripple/tripple-particle-spawn.js";

export const playerCollideAbilities = (player) => { 
    gameVariables.abilityList.forEach((ability, indexA) => {
        if (
            player.position.y <= ability.position.y + ability.height &&
            player.position.y >= ability.position.y &&
            player.position.x + player.width >= ability.position.x &&
            player.position.x - player.width <= ability.position.x + ability.width
        ) {
            playerTakeAbility(player, ability, indexA);
        }
    });
};

const playerTakeAbility = (player, ability, indexA) => {
    gameVariables.abilityList.splice(indexA, 1);
   
    switch (ability.name) {
        case 'health':
            gameVariables.isHealthAbilityActived = true;
            spawnHealthAbilityParticles(player);
            addPlayerLife();    
            gameVariables.isHealthAbilityActived = false;
            break;
        case 'speed':
            gameVariables.isSpeedAbilityActived = true;
            spawnSpeedAbilityParticles(player);
            addPlayerVelocity(player);
            break;
        case 'triple':
            gameVariables.isTrippleMissilesAbilityActived = true;
            spawnTrippleAbilityParticles(player)
            addPlayerTrippleMissile(player);
            break;
        default:
            break;
    }
};