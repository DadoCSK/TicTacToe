import React from "react";
import arcade from "./../img/arcadev3.png";

const HomePage = () => {
  return (
    <main className="home_wrap">
      <img src={arcade} usemap="#image-map" alt="arcade" />

      <map name="image-map">
        <area
          target=""
          alt="coin"
          title="coin"
          href="/play"
          coords="194,429,160,400"
          shape="rect"
        />
        <area
          target=""
          alt="coin"
          title="coin"
          href="/play"
          coords="213,400,244,429"
          shape="rect"
        />
      </map>
    </main>
  );
};
export default HomePage;
