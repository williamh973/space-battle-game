import { gameVariables } from "./gameVariables.js";
import { spawnMissile } from "./interface.js";

export const keys = {
    ArrowLeft:{
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    fired:{ 
        pressed: false
    }
};


// clavier touches
window.addEventListener('keydown',(event)=>{
    switch(event.key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
        break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
        break;
        case ' ':
            if (event.repeat) {
                return
            }
            gameVariables.player.shoot();
            spawnMissile();
        break;
    } 
})

window.addEventListener('keyup',(event)=>{
    switch(event.key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
        break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
        break;
        case 'p':
            alert('pause');
        break;
    }
})