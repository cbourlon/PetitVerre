import data from "./ProductpageComponents/products.json";
import React from "react";
import Accordion from "./Accordion";
import OrderButton from "./OrderButton";

function BeerComponent() {
  return (
    <div className="flex flex-col px-10 ">
      {data.Beers.map((item, i) => {
        return (
          <div
            key={i}
            className=" content pb-20 sm:pt-10 lg:pt-20 lg:flex lg:flex-row lg:space-x-20 xl:space-x-28 xl:px-52 lg:border-b-2  border-y-grey"
          >
            <div className="img flex justify-center pb-5 lg:w-80 lg:h-80 xl:w-80 xl:h-80">
              <img src={item.beerImage} alt="" />
            </div>

            <div className="flex flex-col justify-center lg:w-2/3">
              <h1
                className={`Overskrift ${item.beerColor} font-Ermitial lg:text-left md:text-5xl text-4xl text-center xl:text-8xl px-1`}
              >
                {item.name}
              </h1>

              <h2
                className={`Underoverskrift ${item.beerColor} font-Ermitial xl:text-5xl lg:text-left md:text-2xl text-xl text-center`}
              >
                {item.beerTaste}
              </h2>

              <div
                className="beerDescriptions font-AvenirMedium hidden lg:block xl:text-xl xl:pt-3"
                style={{ maxWidth: "80%" }}
              >
                {item.beerDescription}
              </div>

              <div className="priceText lg:text-left lg:pt-5 sm:text-center sm:pt-6">
                <div className="kategoriPrice text-grey">
                  <p>Price</p>
                </div>
                <div className="PriceVaerdi  font-AvenirHeavy pt-2 lg:text-xl sm:text-lg md:text-xl xl:text-2xl">
                  {item.beerPrice}
                </div>
              </div>

              <div className="orderbutton sm:py-5 lg:hidden flex justify-center">
                <OrderButton buttonText={"ORDER"} to={"/contact"} />
              </div>
            </div>

            <div className="beerinformationboxXL sm:hidden xl:block xl:flex-col xl:space-y-6 xl:py-2 xl:w-1/6 self-start">
              <div className="volumenText">
                <div className="kategoriVolumen text-grey">
                  <p>Volumen</p>
                </div>
                <div className="volumenVaerdi font-AvenirHeavy pt-2 lg:text-xl sm:text-lg md:text-xl">
                  <p>{item.beerVolumeCL}</p>
                  <p>{item.beerVolumePercentage}</p>
                </div>
              </div>

              <div className="ingredientsText">
                <div className="kategoriIngredients text-grey">
                  <p>Ingredients</p>
                </div>
                <div className="ingredientsVaerdi font-AvenirHeavy pt-2 lg:text-xl sm:text-lg md:text-xl">
                  <p>{item.beerIngredients}</p>
                </div>
              </div>

              <div className="orderButton flex justify-center xl:pt-10">
                <OrderButton buttonText="ORDER" to="/contact" />
              </div>
            </div>

            <div className="beerinformationBoxMEDIUM sm:hidden xl:hidden lg:block lg:flex flex-col space-y-10 w-1/3 self-start">
              <Accordion
                title="Volume"
                content={item.beerVolumePercentage}
                content2={item.beerVolumeCL}
              />

              <Accordion title="Ingredients" content={item.beerIngredients} />
              <div className="Orderbutton pt-14">
                <OrderButton buttonText={"ORDER"} to={"/contact"} />
              </div>
            </div>

            <div className="beerinformationAccordionSMALL mx-auto pt-5 lg:hidden">
              <Accordion title="Description" content={item.beerDescription} />

              <Accordion title="Volume" content={item.beerVolumePercentage} />

              <Accordion title="Ingredients" content={item.beerIngredients} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BeerComponent;
