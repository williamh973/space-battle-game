import { gameVariables } from "../game-variables.js"
import { keys } from "../keywords.js";


export const objectMovement = (player) => {
    const particleAjustment = 15;
    if (keys.q.pressed) {   
        gameVariables.abilityParticuleList.forEach((particle) => {
            particle.position.x = player.position.x + particleAjustment;
        })
    } else if (keys.d.pressed) {
        gameVariables.abilityParticuleList.forEach((particle) => {
            particle.position.x = player.position.x + particleAjustment;
        })
    }
} 