import React from "react";
import Square from "./Square";
import './style.css'

const Board = (onClick) => {
  const createSquare = (i) => {
    return <Square value={i} onClick={onClick} />;
  };

  return (
    <>
    <div id="board3">
      <div className="board-row">
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
      </div>
      <div className="board-row">
        {createSquare(3)}
        {createSquare(4)}
        {createSquare(5)}
      </div>
      <div className="board-row">
        {createSquare(6)}
        {createSquare(7)}
        {createSquare(8)}
      </div>
    </div>

    <div id="board4">
      <div className="board-row">
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
        {createSquare(3)}
      </div>
      <div className="board-row">
        {createSquare(4)}
        {createSquare(5)}
        {createSquare(6)}
        {createSquare(7)}
      </div>
      <div className="board-row">
        {createSquare(8)}
        {createSquare(9)}
        {createSquare(10)}
        {createSquare(11)}
        
      </div>
      <div className="board-row">
        {createSquare(12)}
        {createSquare(13)}
        {createSquare(14)}
        {createSquare(15)}
      </div>
    </div>

    <div id="board5">
      <div className="board-row ">
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
        {createSquare(3)}
        {createSquare(4)}
      </div>
      <div className="board-row">
        {createSquare(5)}
        {createSquare(6)}
        {createSquare(7)}
        {createSquare(8)}
        {createSquare(9)}
      </div>
      <div className="board-row">
        {createSquare(10)}
        {createSquare(11)}
        {createSquare(12)}
        {createSquare(13)}
        {createSquare(14)}
      </div>
      <div className="board-row">
        {createSquare(15)}
        {createSquare(16)}
        {createSquare(17)}
        {createSquare(18)}
        {createSquare(19)}
      </div>
      <div className="board-row">
        {createSquare(20)}
        {createSquare(21)}
        {createSquare(22)}
        {createSquare(23)}
        {createSquare(24)}
      </div>
    </div>
    </>
  );
};

export default Board;
