import { gameVariables } from "../gameVariables.js";
import { Grid } from "../spawn-controller/grid/grid-class.js";


export let gridLevel = () => {  
  gameVariables.grids = [
      new Grid({ 
          colums : 4,
          rows : 1
      })
    ]
};