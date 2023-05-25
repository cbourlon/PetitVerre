import data from "./ProductpageComponents/products.json";
import imageExample from "./ProductpageComponents/ProductpageMedia/BlackHope.png";
import React from "react";

function BeerComponent() {
  return (
    <div className="sm:pt-20 flex sm:flex-col">
      {data.Beers.map((item, i) => (
        <div key={i}>
          <div className="content sm:pb-20">
            <div className="img flex sm:justify-center sm:pb-5">
              <img src={imageExample} alt="" />
            </div>

            <div className="tekst">
              <h1
                className={` Overskrift text-${item.beerColor} font-Ermitial sm:text-4xl sm:text-center sm:px-1`}
              >
                {item.name}
              </h1>

              <h2
                className={`Underoverskrift text-${item.beerColor} font-Ermitial sm:text-xl sm:text-center`}
              >
                {item.beerTaste}
              </h2>

              <div className="beerDescriptions sm:font-AvenirMedium sm:text-md sm:pb-10 sm:px-10 sm:text-center">
                {item.beerDescription}
              </div>
            </div>

            <div className="beerinformation"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BeerComponent;
