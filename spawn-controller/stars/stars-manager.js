import { canvasParam } from "../../canvasParam.js";
import { gameVariables } from "../../gameVariables.js";


const starList = [];

const generateStarPositions = () => {
    const starNumber = 20;
    for (let i = 0; i < starNumber; i++) {
        starList.push({
            positionX: Math.random() * canvasParam.canvas.width,
            positionY: Math.random() * canvasParam.canvas.height
        });
    }
};
generateStarPositions();

export const drawStars = (selectedColor) => {
    const previousFillStyle = canvasParam.c.fillStyle;

    canvasParam.c.font = '10px Arial';

    selectedStarColor(selectedColor);

    canvasParam.c.fillStyle = gameVariables.starColor;

    for (let i = 0; i < starList.length; i++) {
        const { positionX, positionY } = starList[i];
        canvasParam.c.fillText('.', positionX, positionY);
    }

    canvasParam.c.fillStyle = previousFillStyle;
};

export const selectedStarColor = (selectedColor) => {
    switch (selectedColor) {
        case '#031700':
        case '#000017':
            canvasParam.c.fillStyle = 'white';
            gameVariables.starColor = canvasParam.c.fillStyle;
            break;
        case '#272727':
            canvasParam.c.fillStyle = 'whitesmoke';
            gameVariables.starColor = canvasParam.c.fillStyle;
            break;
        case '#340500':
            canvasParam.c.fillStyle = 'orange';
            gameVariables.starColor = canvasParam.c.fillStyle;
            break;
        case 'black':
            canvasParam.c.fillStyle = 'white';
            gameVariables.starColor = canvasParam.c.fillStyle;
            break;
    }
};