import React, {useState} from 'react'
import Board from './Board';

const Game = () => {

    const [isX, setIsX] = useState(true);

    const xO = isX ? "X" : "O";

    const handleClick = (i) => {

        const squares = Array(9).fill(null);
        squares[i] = xO;
        setIsX(!isX);
    }

    return (

        <Board onClick={handleClick}/>
    )
}

export default Game;