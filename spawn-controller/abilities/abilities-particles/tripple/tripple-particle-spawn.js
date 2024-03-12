import { gameVariables } from "../../../../game-variables.js";
import { TrippleAbilityParticle } from "./tripple-particles-class.js";


export const spawnTrippleAbilityParticles = (player) => {
    if (gameVariables.isTrippleMissilesAbilityActived) {
        const interval = setInterval(() => {
            gameVariables.abilityParticuleList.push(new TrippleAbilityParticle({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y + player.height / 2
                },
                radius: 6,
                color: 'purple',
                speed: 6,
                life: 10
            }));

            if (!gameVariables.isTrippleMissilesAbilityActived) {
                clearInterval(interval);
            }

            setTimeout(() => {
                gameVariables.isTrippleMissilesAbilityActived = false;
            }, 10_000);

        }, 200);
    }
};