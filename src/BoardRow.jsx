import React, { useState } from "react";
import Square from "./Square";
import style from "./app.css"

const BoardRow = () => {
const renderSquare = (stateOfRow, player) => <Square name={stateOfRow} playere/>
const firstPlayer = 'X';

const [c, setPlayer] = useState(firstPlayer)
const [stateOfRow, setStateOfRow] = useState('')

    return (
        <div>
        <div className="status">Next playter: {player}</div>
        <div className="board-row">
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
        </div>
        <div className="board-row">
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
        </div>
        <div className="board-row">
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
          {renderSquare(stateOfRow)}
        </div>
      </div>
    )
}

export default BoardRow;