export function createPlayerImage() {
    const image = new Image();
    image.src = './assets/images/player/player-aircraft.png';
    return image;
}
export const thePlayerSpaceShip = createPlayerImage('./assets/images/player/player-aircraft.png');