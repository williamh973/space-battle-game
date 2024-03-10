import { gameVariables } from "../../game-variables.js";
import { substractPlayerLife } from "../../interface.js";
import { Particule } from "../particle/particle-class.js";

export const alienMissileCollidePlayer = (alienMissile, player, index) => {
    if( 
        alienMissile.position.y + alienMissile.height >= player.position.y  && 
        alienMissile.position.y  <= player.position.y + player.height  && 
        alienMissile.position.x  >= player.position.x  && 
        alienMissile.position.x + alienMissile.width <= player.position.x + player.width
        ) {
        gameVariables.alienMissiles.splice(index,1);
            for(let i = 0; i < 22; i++) {
                gameVariables.particules.push(new Particule({
                    position:{
                        x: gameVariables.player.position.x + gameVariables.player.width / 2,
                        y: gameVariables.player.position.y + gameVariables.player.height / 2
                    },
                    velocity:{
                        x: (Math.random()-0.5)*4,
                        y: (Math.random()-0.5)*4
                    },
                    radius:Math.random()*3,
                    color:'white'
                }))
            }
            substractPlayerLife(); 
        }
}