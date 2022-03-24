import React from "react";
import Square from "./Square";
import '../style.css';

const Board = ({squares, onClick}) => {
  return (
    <>
      {squares.map((square,i) =>(
        <Square key={i} value={square} onClick={() => onClick(i)}/>
      ))}    
    </>
  )
}

export default Board;
