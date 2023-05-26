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
  //Kigger på URL'en og leder efter parametrene "?filter=all" (se billede)
  const search = useLocation().search;
  const urlSearchParams = new URLSearchParams(search); //Giver hele URL'en
  const param = urlSearchParams.get("filter");
  const allParams = Object.fromEntries(urlSearchParams.entries()); //Giver mig alle mine parametre i URL'en
  console.log(allParams);
  //console.log(params);
  return param; //returnerer den specifikke filter
}
//URLsearchparams

//  const filter = "all"

function FilterMenu({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("all"); //Skal starte fra all
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const param = useQueryParams(); //Gemmer den i variablen param ved at kalde funktionen
  useEffect(() => {
    //Param'en ændrer sig hver gang, så kører vi useEffekten
    onCategoryChange(param); //Den sætter staten til den parameter vi har fået
  }, [param]);
  return (
    <div className="main text-white">
      <div className="filtermenu  font-AvenirMedium flex sm:text-xl sm:flex-row sm:space-x-12 sm:justify-center md:text-2xl md:space-x-20 lg:text-2xl lg:space-x-24 ">
        <Link
          className={`hover:opacity-70 ${
            selectedCategory === "all" && "active"
          }`}
          onClick={() => handleCategoryChange(<AllProducts />)}
          to="?filter=All"
        >
          All
        </Link>

        <Link
          className={`hover:opacity-70 ${
            selectedCategory === "beers" && "active"
          }`}
          onClick={() => handleCategoryChange(<Beers />)}
          to="?filter=Beers"
        >
          Beers
        </Link>

        <Link
          className={`hover:opacity-70 ${
            selectedCategory === "tastingbox" && "active"
          }`}
          onClick={() => handleCategoryChange(<TastingBox />)}
          to="?filter=Tastingbox"
        >
          Tastingbox
        </Link>

        <Link
          className={`hover:opacity-70 ${
            selectedCategory === "goodies" && "active"
          }`}
          onClick={() => handleCategoryChange(<Goodies />)}
          to="?filter=Goodies"
        >
          Goodies
        </Link>
      </div>
    </div>
  );
}

export default FilterMenu;
