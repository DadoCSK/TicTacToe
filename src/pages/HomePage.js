import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {

    return (

        <div>
        <NavLink className="glitch home" to='/game'>Play</NavLink>
        </div>
    )
}
export default HomePage;