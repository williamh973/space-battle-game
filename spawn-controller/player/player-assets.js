export function createPlayerBlueSpaceShip() {
  const image = new Image();
  image.src = "./assets/images/player/blue-spaceship.png";
  image.width = 32;
  image.height = 32;
  return image;
}
export const blueSpaceShip = createPlayerBlueSpaceShip(
  "./assets/images/player/player-aircraft.png"
);

export function createPlayerWhiteSpaceShip() {
  const image = new Image();
  image.src = "./assets/images/player/white-spaceship.png";
  image.width = 32;
  image.height = 32;
  return image;
}
export const whiteSpaceShip = createPlayerWhiteSpaceShip(
  "./assets/images/player/white-aircraft.png"
);

export function createPlayerInterceptorAlphaSpaceShip() {
  const image = new Image();
  image.src = "./assets/images/player/interceptor-alpha.png";
  image.width = 32;
  image.height = 32;
  return image;
}
export const interceptorAlphaSpaceShip = createPlayerInterceptorAlphaSpaceShip(
  "./assets/images/player/interceptor-alpha.png"
);

export function createPlayerAuroraTitanSpaceShip() {
  const image = new Image();
  image.src = "./assets/images/player/aurora-titan.png";
  image.width = 32;
  image.height = 32;
  return image;
}
export const auroraTitanSpaceShip = createPlayerAuroraTitanSpaceShip(
  "./assets/images/player/aurora-titan.png"
);
