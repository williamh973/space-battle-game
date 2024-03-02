export function createAlienImage() {
    const image = new Image();
    image.src = './assets/images/alien/alien-aircraft.png';
    return image;
}
export const theAlienSpaceShip = createAlienImage('./assets/images/alien/alien-aircraft.png');