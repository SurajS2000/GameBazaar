import React from "react";
import logo from "../assets/csgo.jfif";

const Games = () => {
  return (
    <div className="border-2">
      <img src={logo} alt="" />
      <div className="p-3">
        <span>$2000</span>
      </div>
    </div>
  );
};

export default Games;
