import React from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/FilterMenu.css";

function FilterMenu() {
  return (
    <div className="main text-white">
      <div className="filtermenu  font-AvenirMedium flex sm:text-xl sm:flex-row sm:space-x-12 sm:justify-center md:text-2xl md:space-x-20 lg:text-2xl lg:space-x-24 ">
        <button className="hover:opacity-70">All</button>
        <button className="hover:opacity-70">Beers</button>
        <button className="hover:opacity-70">Tastingbox</button>
        <button className="hover:opacity-70">Goodies</button>
      </div>
    </div>
  );
}

export default FilterMenu;
