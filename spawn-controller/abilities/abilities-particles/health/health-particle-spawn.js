import { gameVariables } from "../../../../game-variables.js"
import { HealthAbilityParticle } from "./health-particles-class.js"


export const spawnHealthAbilityParticles = (player) => {
  for(let i = 0; i < 50; i++) {
      gameVariables.abilityParticuleList.push(new HealthAbilityParticle({
          position:{
              x: player.position.x + player.width/2,
              y: player.position.y + player.height/2
          },
          radius: Math.random() * 10,
          color:'yellow',
          shadowColor : 'orange',
          shadowBlur : 15
      }))
  }

};