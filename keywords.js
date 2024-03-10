import { manualShoot } from "./auto-shoot.js";



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
            manualShoot();
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

