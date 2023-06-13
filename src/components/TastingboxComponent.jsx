import React from "react";
import data from "../data/pvdata.json";
import OrderButton from "./OrderButton";

function TastingboxComponent() {
  return (
    <div className="main flex flex-col  px-10">
      {data.Tastingbox.map((item, i) => {
        return (
          <div className="content pb-20 sm:pt-10  sm:border-b-2  border-y-grey md:pb-30">
            <div className="overskrift text-center font-Ermitial sm:text-5xl md:text-6xl md:pt-5 lg:pt-5 lg:text-7xl xl:text-8xl">
              {item.variant}
            </div>

            <div className="sm:flex sm:flex-col-reverse md:flex-col">
              <div className="image lg:flex lg:justify-center">
                <img
                  src={item.tastingboxImage}
                  alt="tastingboximg"
                  className="lg:w-1/2"
                />
              </div>
              <div className="beeramount text-center font-AvenirMedium sm:text-3xl sm:pt-4 lg:text-4xl xl:text-5xl md:pb-1">
                {item.beerAmount}
              </div>
            </div>

            <div className="beertypes text-center font-AvenirMedium sm:text-lg md:text-xl md:px-10 lg:px-28 lg:text-2xl xl:text-3xl xl:px-96 lg:pb-5 xl:pb-16">
              {item.beerTypes}
            </div>

            <div className="discount sm:flex sm:space-x-3 justify-center sm:pt-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              <div className="beforeprice line-through">
                {item.priceBeforeDiscount}
              </div>

              <div className="discountpercentage text-orange">
                {item.discountPercentage}
              </div>
            </div>

            <div className="price  font-AvenirHeavy text-center sm:pt-2 sm:text-2xl md:text-3xl lg:text-4xl lg:pt-4 lg:pb-5 xl:text-5xl xl:pb-16">
              {item.price}
            </div>

            <div className="deal text-center sm:py-10 md:texl-lg md:py-11">
              <div className="dealDescription font-AvenirMedium md:texl-lg lg:text-xl xl:text-2xl">
                {item.extraDeal}
              </div>
              <div className="dealPrice font-AvenirBlack md:texl-lg lg:text-xl xl:text-2xl">
                {item.extraDealPrice}
              </div>
            </div>

            <div className="orderbutton sm:pt-7 flex justify-center">
              <OrderButton buttonText="ORDER" to="/contact" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TastingboxComponent;
