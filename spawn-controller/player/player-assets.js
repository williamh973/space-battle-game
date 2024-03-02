export function createPlayerBlueSpaceShip() {
    const image = new Image();
    image.src = './assets/images/player/blue-spaceship.png';
    return image;
}
export const blueSpaceShip = createPlayerBlueSpaceShip('./assets/images/player/player-aircraft.png');


export function createPlayerWhiteSpaceShip() {
    const image = new Image();
    image.src = './assets/images/player/white-spaceship.png';
    return image;
}
export const whiteSpaceShip = createPlayerWhiteSpaceShip('./assets/images/player/white-aircraft.png');
