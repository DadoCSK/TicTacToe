import React, {useState} from 'react'
import Board from './Board';
import { calculateWinner } from '../context/WinningCondition';

const Game = ({value}) => {

    const [tiles , setTiles] = useState(Array(value).fill(null));
    const [x, setX] = useState(true);
    const xO = x? "X" : "O";
    const winner = calculateWinner(tiles);

    const handleClick = (i) => {
    
        const board = [...tiles];
        if ( winner || board[i]) return;
        board[i] = xO;
        
        setTiles(board);
        setX(!x);
    }
    // const style = {
    //     border: "4px solid darkblue",
    //     borderRadius: "10px",
    //     width: "250px",
    //     height: "250px",
    //     margin: "0 auto",
    //     display: "grid",
    //     gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr)',
    // };

    const reset = () => {

        setTiles(Array(value).fill(null));
        setX(true);
    }
    return (
        <div className={`style${value}`}>
        <Board squares={tiles} onClick={handleClick}/>
        <button onClick={reset}>Reset</button>
        <p>
          {winner ? "Winner: " + winner : "Next Player: " + xO}
            </p>
        </div>
    )
}

export default Game;