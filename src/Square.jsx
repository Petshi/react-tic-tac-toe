import React from "react";
import { useState } from "react";

const Square = (props) => {

const [rowState, setRowState] = useState(props.name) 

    
    return  (
        <div>
            <button onClick={()=>setRowState('Z')} className="square">
        {rowState}
      </button>
      </div>
        
    )
}

export default Square;