import React from 'react';
import {NavLink} from 'react-router-dom';


const PlayPage = () => {

    return (
        <div className="container">
        <NavLink className='glitch home' to="/game">
            Play
      </NavLink>
    </div>
    );
};
export default PlayPage;