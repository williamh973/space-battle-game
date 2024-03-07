import { gameVariables } from "./gameVariables.js";
import { spawnMissile } from "./interface.js";

export const keys = {
    q:{
        pressed: false
    },
    d:{
        pressed: false
    },
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
        case 'q':
            keys.q.pressed = true;
        break;
        case 'd':
            keys.d.pressed = true;
        break;
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
        case 'q':
            keys.q.pressed = false;
        break;
        case 'd':
            keys.d.pressed = false;
        break;
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
