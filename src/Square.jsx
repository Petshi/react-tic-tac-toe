import React from "react";
import { useState } from "react";

const Square = (props) => {
    const [player, setPlayer] = useState(props.player)
    const [rowState, setRowState] = useState(props.name) 
    const whoIsPlayer = () => {
    (player === 'X')?setPlayer('O'):setPlayer('X')
     setRowState(player)
    }
    return  (
        <div>
            <button onClick={()=>whoIsPlayer(props.player)} className="square">
               { console.log(props.setRow(props.number))}
               {rowState}
      </button>
      </div>
        
    )
}

export default Square;