import React from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/FilterMenu.css";

function FilterMenu() {
  return (
    <div className="main text-white">
      <div className="filtermenu  font-AvenirMedium flex sm:flex-row sm:space-x-10 sm:justify-center md:text-xl md:space-x-16 lg:text-2xl lg:space-x-24 xl:flex-col xl:items-start xl:space-x-0 xl:space-y-4 xl:text-xl xl:pl-4">
        <button className="hover:opacity-70">All</button>
        <button className="hover:opacity-70">Beers</button>
        <button className="hover:opacity-70">Tastingbox</button>
        <button className="hover:opacity-70">Goodies</button>
      </div>
    </div>
  );
}

export default FilterMenu;
