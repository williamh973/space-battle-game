export function createAlienRedSpaceShip() {
    const image = new Image();
    image.src = './assets/images/alien/alien-red-spaceship.png';
    image.width = 32;
    image.height = 32;
    return image;
}
export const redAlienSpaceShip = createAlienRedSpaceShip('./assets/images/alien/alien-red-spaceship.png');


export function createAlienOrangeSpaceShip() {
    const image = new Image();
    image.src = './assets/images/alien/alien-orange-spaceship.png';
    image.width = 32;
    image.height = 32;
    return image;
}
export const orangeAlienSpaceShip = createAlienOrangeSpaceShip('./assets/images/alien/alien-orange-spaceship.png');