import { gameVariables } from "../../game-variables.js";
import { createHealthAbilityImage, createSpeedAbilityImage, createTrippleMissileAbilityImage, healthAbilityImage, speedAbilityImage, trippleMissileAbilityImage } from "./abilities-assets.js";
import { Ability } from "./ability-class.js";


export const spawnRandomAbilities = (invader) => {
    initAbilities(invader);
};


const randomAbilities = (healthAbility, speedAbility, trippleMissileAbility) => {
    let randomNumber = Math.random();

   if (randomNumber <= 0.33) {
       gameVariables.abilityList.push(healthAbility);  
       healthAbility.name = 'health';      
   } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
       gameVariables.abilityList.push(speedAbility);   
       speedAbility.name = 'speed'; 
   } else {
       gameVariables.abilityList.push(trippleMissileAbility);
       trippleMissileAbility.name = 'triple';  
   };
};


const initAbilities = (invader) => {
    let healthAbility = new Ability({
        position : {
            x : invader.position.x,
            y : invader.position.y
        },
        image : createHealthAbilityImage(healthAbilityImage)
    })
    let speedAbility = new Ability({
        position : {
            x : invader.position.x,
            y : invader.position.y
        },
        image : createSpeedAbilityImage(speedAbilityImage)
    })
    let trippleMissileAbility = new Ability({
        position : {
            x : invader.position.x,
            y : invader.position.y
        },
        image : createTrippleMissileAbilityImage(trippleMissileAbilityImage)
    })

    randomAbilities(healthAbility, speedAbility, trippleMissileAbility);
};
