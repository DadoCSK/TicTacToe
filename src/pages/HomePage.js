import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return (

        <div >
        <NavLink className="home glitch" to='/game'>Play</NavLink>
        </div>
    )
}
export default HomePage;