import React, { useState } from "react";
import Square from "./Square";
import style from "./app.css"

const BoardRow = () => {


const [player, setPlayer] = useState('X')
const setRow = (mark) => {
  return mark

}


    return (
      <div>
      <div className="status">Next playter: {player}</div>
      <div className="board-row">
        <Square player={player} number={0} setRow={setRow}/>
        <Square player={player} number={1} setRow={setRow}/>
        <Square player={player} number={2} setRow={setRow}/>
      </div>
      <div className="board-row">
        <Square player={player} number={3} setRow={setRow}/>
        <Square player={player} number={4} setRow={setRow}/>
        <Square player={player} number={5} setRow={setRow}/>
      </div>
      <div className="board-row">
        <Square player={player} number={6} setRow={setRow}/>
        <Square player={player} number={7}setRow={setRow}/>
        <Square player={player} number={8} setRow={setRow}/>
      </div>
    </div>
    )
}

export default BoardRow;