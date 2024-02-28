import { gameVariables } from "./gameVariables.js";


gameVariables.scoreTag.innerText = "Score : " + gameVariables.stock;
gameVariables.scoreTag.style.position = "absolute";
gameVariables.scoreTag.style.top = "10px";
gameVariables.scoreTag.style.left = "10px"
gameVariables.scoreTag.style.font = "italic 25px impact"
gameVariables.scoreTag.style.color = "white"
gameVariables.scoreTag.style.textShadow = "3px 3px 2px purple"

// la vie
gameVariables.lifeTag.innerText = "Vie : " + gameVariables.lifes;
gameVariables.lifeTag.style.position = "absolute";
gameVariables.lifeTag.style.top = "50px";
gameVariables.lifeTag.style.left = "10px"
gameVariables.lifeTag.style.font = "italic 25px impact"
gameVariables.lifeTag.style.color = "white"
gameVariables.lifeTag.style.textShadow = "3px 3px 2px red"

// les tirs effectués
gameVariables.tirTag.innerText = "Missiles : " + gameVariables.majTir;
gameVariables.tirTag.style.position = "absolute";
gameVariables.tirTag.style.top = "90px";
gameVariables.tirTag.style.left = "10px"
gameVariables.tirTag.style.font = "italic 25px impact"
gameVariables.tirTag.style.color = "white"
gameVariables.tirTag.style.textShadow = "1px 1px 1px orange"


export const spawnMissile = () => {
    gameVariables.majTir += 1;
    gameVariables.tirTag.innerText = "Missiles : " + gameVariables.majTir;
};

export const adStock = () => {
    gameVariables.stock += 1;
    gameVariables.scoreTag.innerText = "Score : " + gameVariables.stock 
};

export const lostLife = () => {
    gameVariables.lifes--;
    gameVariables.lifeTag.innerText = "Vie : " + gameVariables.lifes;
    if(gameVariables.lifes < 0 ){
        alert('perdu');
        init();
    }
};