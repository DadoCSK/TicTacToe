import React, { useState } from 'react';
import {BrowserRouter , Route, Routes, NavLink} from 'react-router-dom';
import arcadeS from "./../img/arcade_screen.png"


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