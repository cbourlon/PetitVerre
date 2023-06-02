import React, { useEffect } from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../style/FilterMenu.css";
import AllProducts from "./ProductpageComponents/AllProducts";
import Beers from "./ProductpageComponents/Beers";
import Goodies from "./ProductpageComponents/Goodies";
import TastingBox from "./ProductpageComponents/TastingBox";
import { useLocation } from "react-router-dom";

export function useQueryParams() {
  const search = useLocation().search;
  const urlSearchParams = new URLSearchParams(search);
  const param = urlSearchParams.get("filter");
  return param; //returnerer den specifikke filter
}

function FilterMenu({ onCategoryChange }) {
  const param = useQueryParams();
  useEffect(() => {
    onCategoryChange(param);
  }, [param]);
  return (
    <div className="main text-white">
      <div className="filtermenu  font-AvenirMedium flex sm:text-xl sm:flex-row sm:space-x-12 sm:justify-center md:text-2xl md:space-x-20 lg:text-2xl lg:space-x-24 sm:pb-10 md:pb-20 lg:pb-24">
        <Link
          className={`hover:opacity-70 ${
            param === "All" ? "text-orange font-AvenirHeavy" : ""
          }`}
          to="?filter=All"
        >
          All
        </Link>

        <Link
          className={`hover:opacity-70 ${
            param === "Beers" ? "text-orange font-AvenirHeavy" : ""
          }`}
          to="?filter=Beers"
        >
          Beers
        </Link>

        <Link
          className={`hover:opacity-70 ${
            param === "Tastingbox" ? "text-orange font-AvenirHeavy" : ""
          }`}
          to="?filter=Tastingbox"
        >
          Tastingbox
        </Link>

        <Link
          className={`hover:opacity-70 ${
            param === "Goodies" ? "text-orange font-AvenirHeavy" : ""
          }`}
          to="?filter=Goodies"
        >
          Goodies
        </Link>
      </div>
    </div>
  );
}

export default FilterMenu;
