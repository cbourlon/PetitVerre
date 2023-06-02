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

  const handleCategoryChange = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

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
