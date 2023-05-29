import React from "react";
import HermitSerious from "./AboutpageMedia/HermitExtraImg.png";
import PetitVerreImg from "./AboutpageMedia/PetitVerreImg.png";
import LermitageImg from "./AboutpageMedia/LermitageImg.png";
import HermitImg from "./AboutpageMedia/HermitImg.png";

import "./AboutSectionsStyle.css";

function AboutSections() {
  return (
    <div className="main text-white sm:pt-20 md:pt-20 lg:pt-20 xl:pt-16">
      <div className="content flex justify-center flex-col items-center">
        <img
          src={HermitSerious}
          alt="OverskriftHat"
          className="sm:w-1/4 xl:w-1/6"
        />

        <div className="Overskrifter text-center sm:flex sm:flex-col sm:justify-center ">
          <h1 className="font-Ermitial sm:text-7xl md:text-8xl xl:text-9xl">
            ABOUT US
          </h1>

          <h2 className="font-AvenirMedium sm:text-lg md:text-xl xl:text-3xl">
            Unveiling the story behind our journey of excellence.
          </h2>

          <div className="Sektioner sm:pt-24 sm:px-10 sm:space-y-28 xl:pt-44 lg:space-y-36">
            <div className="PetitVerre ">
              <h1 className="font-Ermitial sm:text-6xl sm:text-left lg:text-7xl md:text-center xl:text-8xl">
                PETIT VERRE
              </h1>

              <p className="description font-AvenirBook text-left md:text-center md:text-lg xl:text-xl sm:leading-7 md:leading-8 xl:leading-9 xl:pt-2 lg:max-w-[800px] ">
                Lorem ipsum dolor sit amet consectetur. Tellus etiam praesent
                magna duis. Maecenas diam egestas dolor cursus id. Turpis
                pulvinar lacus tincidunt in. Enim tristique lorem egestas
                accumsan diam vulputate hendrerit egestas risus. Lorem ipsum
                dolor sit amet consectetur. Tellus etiam praesent magna duis.
                Lorem ipsum dolor sit amet consectetur. Tellus etiam praesent
                magna duis.
              </p>
            </div>

            <div className="TheHermit md:flex md:flex-col">
              <h1 className="font-Ermitial sm:text-6xl sm:text-left lg:text-7xl md:text-center xl:text-8xl">
                THE HERMIT
              </h1>

              <p className="description font-AvenirBook text-left md:text-center md:text-lg xl:text-xl sm:leading-7 md:leading-8 xl:leading-9 xl:pt-2 lg:max-w-[800px] ">
                The brewery's visual expression is largely focused around the
                Hermit, or Hermit, who, according to the Marseillan tarot cards,
                symbolizes a journey towards knowledge, enlightenment and
                reflection. The visual universe is created by the fourth Hermit
                and freelance illustrator Julien (KRUMP)
              </p>
            </div>

            <div className="Lermitage md:flex md:flex-col md:items-center">
              <h1 className="font-Ermitial sm:text-6xl sm:text-left lg:text-7xl md:text-center xl:text-8xl">
                L'ERMITAGE
              </h1>

              <img
                src={LermitageImg}
                alt="LermitagePhoto"
                className=" sm:pt-5 sm:pb-10 md:w-2/3 md:pt-8 lg:w-3/4 
              "
              />

              <p className="description font-AvenirBook text-left md:text-center md:text-lg xl:text-xl sm:leading-7 md:leading-8 xl:leading-9 xl:pt-2 lg:max-w-[800px] ">
                Ermitage Brewery. Born from a kitchen experiment, three friends
                from Brussels created a diverse range of balanced and aromatic
                beers. From collaborations to herb-infused brews, their
                creations capture the essence of craftsmanship. Discover
                Ermitage beers in Brussels' independent bars, restaurants, and
                specialty shops. Experience their unique vision at L'Ermitage
                Saint-Gilles bar and Les Caves de L'Ermitage wine shop. Cheers
                to a journey of flavor and friendship!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSections;
