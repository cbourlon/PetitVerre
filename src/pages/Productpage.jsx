import React, { useState } from "react";
import FilterMenu from "../components/FilterMenu";
import AllProducts from "../components/ProductpageComponents/AllProducts";
import BeerComponent from "../components/BeerComponent";
import Beers from "../components/ProductpageComponents/Beers";
import Goodies from "../components/ProductpageComponents/Goodies";
import TastingBox from "../components/ProductpageComponents/TastingBox";
import ScrollToTop from "../components/ScrollToTop";

function Productpage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  //Sætter hvor jeg er "goodies, all beers osv" -> sætter staten. Den sender jeg ned til fitlermenu, så man kan kalde fuktionen derfra.
  const handleCategoryChange = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  //Kalder handleCategoryChange via variablen onCategoryChange, ændrer navnet af funktionen til filtermenuen

  return (
    <div className="Filtermenu text-white sm:pt-28">
      <FilterMenu onCategoryChange={handleCategoryChange} />
      {selectedCategory === "All" && <AllProducts />}
      {selectedCategory === "Beers" && <Beers />}
      {selectedCategory === "Tastingbox" && <TastingBox />}
      {selectedCategory === "Goodies" && <Goodies />}
      <ScrollToTop />
    </div>
  );
}

export default Productpage;
