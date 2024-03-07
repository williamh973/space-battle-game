import { canvasParam } from "../../canvasParam.js";


const starList = [];

const generateStarPositions = () => {
    for (let i = 0; i < 20; i++) {
        starList.push({
            positionX: Math.random() * canvasParam.canvas.width,
            positionY: Math.random() * canvasParam.canvas.height
        });
    }
};
generateStarPositions();


export const drawStars = () => {
    const previousFillStyle = canvasParam.c.fillStyle;

    canvasParam.c.font = '10px Arial';
    
    for (let i = 0; i < starList.length; i++) {
        const { positionX, positionY } = starList[i];
        canvasParam.c.fillText('.', positionX, positionY);
        canvasParam.c.fillStyle = 'white';
    }

    canvasParam.c.fillStyle = previousFillStyle;
};
