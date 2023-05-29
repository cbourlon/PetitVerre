import React from "react";
import data from "./ProductpageComponents/products.json";
import OrderButton from "./OrderButton";

function GlassesComponent() {
  return (
    <div className="main px-10 ">
      <div className="Overskrifter text-center">
        <div className="overskrift font-Ermitial xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl sm:pt-10">
          <h1>GLASSES</h1>
        </div>
        <div className="underoverskrift font-AvenirMedium xl:text-2xl lg:text-xl sm:text-md">
          <h2>Toast to perfection with our exquisite glassware.</h2>
        </div>
      </div>

      <div className="contentLargeView sm:hidden lg:flex lg:flex-row justify-center lg:space-x-28 xl:space-x-44 pb-20 pt-10">
        {data.Glasses.map((item, i) => {
          return (
            <div
              className={`products flex flex-col lg:pt-12 justify-center text-center lg:space-y-5`}
              key={i}
            >
              <div className="glassImg flex justify-center">
                <img src={item.GlassImg} alt="GlassImages" />
              </div>
              <div className="glassDescription lg:text-xl xl:text-2xl">
                <p>
                  {item.GlassVolume} - {item.GlassPrice}
                </p>
              </div>
              <div className="orderButton">
                <OrderButton buttonText="ORDER" to="/contact" />
              </div>
            </div>
          );
        })}
      </div>

      {data.Glasses.map((item, i) => {
        return (
          <div className="contentSmallView lg:hidden pb-20 sm:pt-20">
            <div className="productContent sm:flex sm:items-center sm:flex-col sm:space-y-7">
              <div className="glassImg">
                <img src={item.GlassImg} alt="Glasses pics" />
              </div>
              <div className="description font-AvenirMedium sm:text-lg">
                <p>
                  {item.GlassVolume} - {item.GlassPrice}
                </p>
              </div>
              <div className="orderButton">
                <OrderButton buttonText="ORDER" to="/contact" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GlassesComponent;
