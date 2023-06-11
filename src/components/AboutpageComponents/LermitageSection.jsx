import React from "react";
import LermitageImg from "./AboutpageMedia/LermitageImg.png";

function LermitageSection() {
  return (
    <div className="main   text-white sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className=" content flex sm:flex-col md:flex-row md:space-x-10 sm:py-5 sm:px-10 xl:px-72 xl:space-x-0  ">
        <div className="text md:bg-nigredo md:bg-opacity-50 md:rounded-xl md:p-10 md:pr-52 xl:py-20 xl:pl-20 xl:pr-96 relative">
          <h1 className="Overskrift sm:text-left font-Ermitial sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            L'ERMITAGE
          </h1>
          <p className="Tekst sm:text-left font-AvenirBook md:max-w-xs md:pt-2 lg:text-lg lg:pt-3 lg:max-w-sm xl:text-xl xl:leading-8 xl:max-w-lg ">
            Ermitage Brewery. Born from a kitchen experiment, three friends from
            Brussels created a diverse range of balanced and aromatic beers.
            From collaborations to herb-infused brews, their creations capture
            the essence of craftsmanship. Discover Ermitage beers in Brussels'
            independent bars, restaurants, and specialty shops. Experience their
            unique vision at L'Ermitage Saint-Gilles bar and Les Caves de
            L'Ermitage wine shop. Cheers to a journey of flavor and friendship!
          </p>
        </div>
        <div className="">
          <img
            src={LermitageImg}
            alt="petitverreimage"
            className="sm:mt-10 md:w-2/5 lg:w-2/1 md:rounded-md md:absolute md:z-20 md:right-8 md:pr-10 md:mt-36 lg:right-12 xl:w-2/6 xl:right-52 xl:mt-24 shadow-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default LermitageSection;
