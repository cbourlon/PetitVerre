import React from "react";
import HermitBeerTasting from "./PrivateTastingMedia/BeerTasting.png";
import OrderButton from "../OrderButton";

function PrivateTastingSection({ data }) {
  return (
    <div className="main text-white sm:pt-20 md:pt-32 lg:pt-32">
      <div className="LargeView sm:hidden lg:flex lg:flex-row lg:px-16 ">
        <div className="VenstreContent flex-1 lg:pt-12 ">
          <div className="tekst">
            <div className="overskrift font-Ermitial xl:text-8xl lg:text-5xl text-center">
              <h1 style={{ whiteSpace: "nowrap" }}>{data[0].Overskrift}</h1>
            </div>

            <div className="description font-AvenirMedium text-center xl:text-2xl lg:pt-2 text-lg lg:pb-10 xl:pb-20 lg:mx-auto lg:max-w-xl xl:mx-auto xl:max-w-2xl">
              {data[0].Tekst}
            </div>

            <div className="information font-AvenirHeavy lg:pb-10 xl:pb-20">
              <div className="price flex flex-col text-center">
                <h2 className="sm:text-2xl md:text-3xl xl:text-4xl ">
                  {data[0].Pris}
                </h2>
                <p className="md:text-xl xl:text-2xl xl:pt-2">
                  {data[0].Requirement}
                </p>
              </div>
            </div>

            <div className="orderButton flex  justify-center sm:pb-20">
              <OrderButton buttonText="BOOK" to="/contact" />
            </div>
          </div>
        </div>

        <div className="photoContent items-center sm:mr-0 xl:mr-32 ">
          <img
            src={HermitBeerTasting}
            alt="HermitBeerTastingPhoto"
            className=""
          />
        </div>
      </div>

      <div className="SmallView lg:hidden">
        <div className="overskrift font-Ermitial text-center sm:text-5xl md:text-6xl">
          <h1>PRIVATE TASTING</h1>
        </div>

        <div className="photoContent flex justify-center">
          <img
            src={HermitBeerTasting}
            alt="HermitBeerTastingPhoto"
            className="sm:w-1/2"
          />
        </div>

        <div className="description sm:px-10 sm:text-left md:text-center font-AvenirMedium sm:pt-10 sm:pb-10 md:pb-16">
          <p className="sm:text-lg md:text-2xl  ">
            Indulge in an exquisite beer tasting experience that tantalizes your
            taste buds. Savor the rich flavors, distinct aromas, and expertly
            crafted brews. Discover a world mystery, smooth ales, and adventure.
            Unleash your inner beer connoisseur and embark on a sensory journey
            like no other.
          </p>
        </div>

        <div className="information font-AvenirHeavy flex justify-center sm:pb-10 md:pb-16 ">
          <div className="price flex flex-col text-center">
            <h2 className="sm:text-2xl md:text-3xl ">195DKK/person</h2>
            <p className="md:text-xl">Minimum 6 people</p>
          </div>
        </div>

        <div className="orderButton flex  justify-center sm:pb-20">
          <OrderButton buttonText="BOOK" to="/contact" />
        </div>
      </div>
    </div>
  );
}

export default PrivateTastingSection;
