import React from "react";
import BeerComponent from "../BeerComponent";
import TastingboxComponent from "../TastingboxComponent";
import GlassesComponent from "../GlassesComponent";

function AllProducts({ beers, goodies, tastingbox }) {
  return (
    <div className="">
      <BeerComponent beers={beers} />

      <TastingboxComponent tastingbox={tastingbox} />

      <GlassesComponent goodies={goodies} />
    </div>
  );
}

export default AllProducts;
