import { gameVariables } from "../../game-variables.js";
import {
  createHealthAbilityImage,
  createSpeedAbilityImage,
  createTrippleMissileAbilityImage,
  healthAbilityImage,
  speedAbilityImage,
  trippleMissileAbilityImage,
} from "./abilities-assets.js";
import { Ability } from "./ability-class.js";

export const spawnRandomAbilities = (invader) => {
  initAbilities(invader);
};

const randomAbilities = (
  healthAbility,
  speedAbility,
  trippleMissileAbility
) => {
  let randomNumber = Math.random();

  if (randomNumber <= 0.02) {
    gameVariables.abilityList.push(healthAbility);
    healthAbility.name = "health";
  } else if (randomNumber > 0.02 && randomNumber <= 0.04) {
    gameVariables.abilityList.push(speedAbility);
    speedAbility.name = "speed";
  } else if (randomNumber > 0.04 && randomNumber <= 0.06) {
    gameVariables.abilityList.push(trippleMissileAbility);
    trippleMissileAbility.name = "triple";
  } else {
    return;
  }
};

const initAbilities = (invader) => {
  let healthAbility = new Ability({
    position: {
      x: invader.position.x,
      y: invader.position.y,
    },
    image: createHealthAbilityImage(healthAbilityImage),
  });
  let speedAbility = new Ability({
    position: {
      x: invader.position.x,
      y: invader.position.y,
    },
    image: createSpeedAbilityImage(speedAbilityImage),
  });
  let trippleMissileAbility = new Ability({
    position: {
      x: invader.position.x,
      y: invader.position.y,
    },
    image: createTrippleMissileAbilityImage(trippleMissileAbilityImage),
  });

  randomAbilities(healthAbility, speedAbility, trippleMissileAbility);
};
