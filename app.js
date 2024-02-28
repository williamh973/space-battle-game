import { canvasParam } from "./canvasParam.js";
import { gameVariables } from "./gameVariables.js";
import { adStock, lostLife } from "./interface.js";
import { Particule } from "./spawn-controller/particle/particle-class.js";
import { Player } from "./spawn-controller/player/player-class.js";
import { Grid } from "./spawn-controller/grid/grid-class.js";



const init = () => {
    gameVariables.missiles = [];
    gameVariables.alienMissiles = []; 
    gameVariables.particules = [];
    gameVariables.grids = [new Grid()];
    gameVariables.lifes = 3;
    gameVariables.scoreTag = document.getElementById('score');
    gameVariables.lifeTag = document.getElementById('vie');
    gameVariables.tirTag = document.getElementById('tir');
    gameVariables.vie = 1;
    gameVariables.stock = 0;
    gameVariables.majTir = 1
    gameVariables.player = new Player(); 
};
init();


const missilePlayerUpdate = () => {
    gameVariables.missiles.forEach((missile, index) => {
        if(missile.position.y + missile.height <= 0) { 
            setTimeout(() => {
                gameVariables.missiles.splice(index, 1)
            }, 0
            )
        } else {
            missile.update();
        }
    }) 
};


const particleUpdate = () => {
    gameVariables.particules.forEach((particule, index)=>{
        if(particule.opacity <= 0){
            gameVariables.particules.splice(index, 1)
        } else {
            particule.update();
        }
    }) 
};



const animate = () => {
    canvasParam.c.clearRect( 0, 0, canvasParam.canvas.width, canvasParam.canvas.height);
    requestAnimationFrame(animate);
    
    gameVariables.grids.forEach((grid, indexGrid) => {
        grid.update();
        
        if (gameVariables.frames % 30 === 0 && grid.invaders.length > 0) {
            grid.invaders[
                Math.floor(Math.random() * (grid.invaders.length))
            ].shoot(gameVariables.alienMissiles)
        }

        grid.invaders.forEach((invader,indexI) => {
            invader.update({
                velocity : grid.velocity
            });

            gameVariables.missiles.forEach((missile, indexM) => {
                if(
                   missile.position.y <= invader.position.y + invader.height &&
                   missile.position.y >= invader.position.y  &&
                   missile.position.x + missile.width >= invader.position.x &&
                   missile.position.x - missile.width <= invader.position.x + invader.width
                   ) {
                    for(let i = 0; i < 22; i++) {
                        gameVariables.particules.push(new Particule({
                            position:{
                                x: invader.position.x + invader.width/2,
                                y: invader.position.y + invader.height/2
                            },
                            velocity:{
                                x: (Math.random()-0.5)*4,
                                y: (Math.random()-0.5)*4
                            },
                            radius: Math.random()*2,
                            color:'grey'
                        }))
                    }
                    adStock()
                    setTimeout(() => {
                        grid.invaders.splice(indexI,1);
                        gameVariables.missiles.splice(indexM,1)
                        if(grid.invaders.length === 0 && gameVariables.grids.length == 1 && gameVariables.stock !== 10 ) {
                            gameVariables.grids.splice(indexGrid,1);
                            gameVariables.grids.push(new Grid());
                        }
                        if(grid.invaders.length === 0 && gameVariables.grids.length == 1 && gameVariables.stock >= 10 ) {
                            gameVariables.grids.splice(indexGrid,1);
                            gameVariables.grids.push(new Grid());
                        }
                    },0)
                }
            })
        })
    })


  particleUpdate();
  missilePlayerUpdate();
    
  gameVariables.alienMissiles.forEach((alienMissile,index) => {
    if(alienMissile.position.y + alienMissile.height >= canvasParam.canvas.height) { 
        setTimeout(() => {
            gameVariables.alienMissiles.splice(index,1)} ,0);     
        } else {
        alienMissile.update();
    }
    if( 
        alienMissile.position.y + alienMissile.height >= gameVariables.player.position.y  && 
        alienMissile.position.y  <= gameVariables.player.position.y +gameVariables.player.height  && 
        alienMissile.position.x  >= gameVariables.player.position.x  && 
        alienMissile.position.x + alienMissile.width <= gameVariables.player.position.x + gameVariables.player.width
        ) {
        gameVariables.alienMissiles.splice(index,1);
            for(let i = 0; i < 22; i++) {
                gameVariables.particules.push(new Particule({
                    position:{
                        x: gameVariables.player.position.x + gameVariables.player.width / 2,
                        y: gameVariables.player.position.y + gameVariables.player.height / 2
                    },
                    velocity:{
                        x: (Math.random()-0.5)*4,
                        y: (Math.random()-0.5)*4
                    },
                    radius:Math.random()*3,
                    color:'white'
                }))
            }
            lostLife(); 
        }
    }) 
    
    gameVariables.player.update();
    gameVariables.frames++;
};
animate();


