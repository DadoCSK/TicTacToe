import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arcade from "./../img/arcadev2.png";

const HomePage = () => {
 
    const [activeClass, setActiveClass] = useState(false);

    const switchScreen = () => {
        setActiveClass(!activeClass);
        
    }

    const nesto = () => {
        console.log("test")
    }
 
 
    return (
        <div>
      <NavLink className={activeClass?'glitch home':'hide'} to="/game">
        Play
      </NavLink>
    <div className={activeClass? 'hide': 'img'}>
      <img src={arcade} useMap="#image-map" />

      <map name="image-map">
        <area
          target=""
          alt="coin"
          title="coin"
          href="#"
          coords="73,336,95,313"
          shape="rect"
          onClick={switchScreen}
        />
        <area
          target=""
          alt="coin2"
          title="coin2"
          href="/game"
          coords="116,314,137,336"
          shape="rect"
        />
      </map>
      </div>
</div>
  );
};
export default HomePage;
