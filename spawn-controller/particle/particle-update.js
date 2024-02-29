import { gameVariables } from "../../gameVariables.js";


export const particleUpdate = () => {
    gameVariables.particules.forEach((particule, index)=>{
        if(particule.opacity <= 0) {
            gameVariables.particules.splice(index, 1)
        } else {
            particule.update();
        }
    }) 
};