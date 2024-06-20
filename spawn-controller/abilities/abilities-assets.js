export function createHealthAbilityImage() {
  const image = new Image();
  image.src = "./assets/images/abilities/increase-player-health.png";
  return image;
}
export const healthAbilityImage = createHealthAbilityImage(
  "./assets/images/abilities/increase-player-health.png"
);

export function createSpeedAbilityImage() {
  const image = new Image();
  image.src = "./assets/images/abilities/increase-player-speed.png";
  return image;
}
export const speedAbilityImage = createSpeedAbilityImage(
  "./assets/images/abilities/increase-player-speed.png"
);

export function createTrippleMissileAbilityImage() {
  const image = new Image();
  image.src = "./assets/images/abilities/tripple-missiles.png";
  return image;
}
export const trippleMissileAbilityImage = createTrippleMissileAbilityImage(
  "./assets/images/abilities/tripple-missiles.png"
);
