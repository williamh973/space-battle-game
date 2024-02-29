import { gameVariables } from "../../gameVariables.js"
import { Particule } from "./particle-class.js"

export const spawnParticles = (invader) => {
  for(let i = 0; i < 22; i++) {
      gameVariables.particules.push(new Particule({
          position:{
              x: invader.position.x + invader.width/2,
              y: invader.position.y + invader.height/2
          },
          velocity:{
              x: (Math.random()-0.5) * 4,
              y: (Math.random()-0.5) * 4
          },
          radius: Math.random()*2,
          color:'grey'
      }))
  }
}