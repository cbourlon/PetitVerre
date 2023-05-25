import React from "react";
import FilterMenu from "../components/FilterMenu";
import AllProducts from "../components/ProductpageComponents/AllProducts";
import BeerComponent from "../components/BeerComponent";

function Productpage() {
  return (
    <div className="Filtermenu text-white sm:pt-40">
      <FilterMenu />
      <BeerComponent />
    </div>
  );
}

export default Productpage;
