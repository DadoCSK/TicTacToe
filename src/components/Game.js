import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./WinningCondition";

const Game = ({ value }) => {
  const [tiles, setTiles] = useState(Array(value).fill(null));
  const [x, setX] = useState(true);
  const xO = x ? "X" : "O";
  const winner = calculateWinner(tiles);

  const handleClick = (i) => {
    const board = [...tiles];
    if (winner || board[i]) return;
    board[i] = xO;

    setTiles(board);
    setX(!x);
  };

  const reset = () => {
    setTiles(Array(value).fill(null));
    setX(true);
  };

  return (
      
    <div className="center">
        <div className={winner?'winner':'nextPlayer'}>
      {winner ? "Winner: " + winner : "Next Player: " + xO}
        </div>
      <div className={`style${value}`}>
        <Board squares={tiles} onClick={handleClick} />
      </div>
      <button onClick={reset} className="btnReset">
          Reset
        </button>
        
    </div>
  );
};

export default Game;
