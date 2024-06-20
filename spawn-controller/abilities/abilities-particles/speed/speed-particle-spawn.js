import { gameVariables } from "../../../../game-variables.js";
import { SpeedAbilityParticle } from "./speed-particles-class.js";

export const spawnSpeedAbilityParticles = (player) => {
  if (gameVariables.isSpeedAbilityActived) {
    const interval = setInterval(() => {
      gameVariables.abilityParticuleList.push(
        new SpeedAbilityParticle({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2,
          },
          length: 25,
          color: "cyan",
          thickness: 5,
          speed: 1,
          shadowColor: "whitesmoke",
          shadowBlur: 10,
        })
      );

      if (!gameVariables.isSpeedAbilityActived) {
        clearInterval(interval);
      }

      setTimeout(() => {
        gameVariables.isSpeedAbilityActived = false;
      }, 8_000);
    }, 200);
  }
};
