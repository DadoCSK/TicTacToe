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
    if (winner || board[i]) return ;
    board[i] = xO;

    setTiles(board);
    setX(!x);
  };

  function draw(tiles) {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i] == null) {
        return false;
      }
    }
    return true;
  }
  const getWinner = () => {
      if(winner) return "Winner:"+winner;
      else if(draw(tiles)){
       return "It's a draw!";
      }else return "Next Player: " + xO;
  }

  const reset = () => {
    setTiles(Array(value).fill(null));
    setX(true);
  };

  return (
      
    <div className="center">
        <div className={winner?'winner':'nextPlayer'}>
        {getWinner()}
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
