import React from 'react';
import {NavLink} from 'react-router-dom';


const PlayPage = () => {

    return (
        <div className="container">
        <NavLink className='glitch home' to="https://main--luxury-flan-b8be60.netlify.app/game">
            Play
      </NavLink>
    </div>
    );
};
export default PlayPage;