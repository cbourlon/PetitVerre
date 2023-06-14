import React from "react";
import JulienPhoto from "./AboutpageMedia/JulienCreditImg.png";
import igIcon from "./AboutpageMedia/igIcon.png";

function CreditSection({ data }) {
  return (
    <div className="main text-black sm:pt-28 md:pt-32 lg:pt-36 xl:40 ">
      <div className="content bg-white">
        <div className="LargeScreen sm:hidden lg:flex flex-row items-center justify-center lg:space-x-28 xl:space-x-36 lg:py-5 xl:py-10 ">
          <div className="VenstreContent flex flex-col items-center">
            <div className="overskrift lg:pb-10 lg:pt-20">
              <h1 className="font-Ermitial lg:text-5xl xl:text-7xl">
                {data[4]?.CreditOverskrift}
              </h1>
            </div>

            <div className="Tekst lg:pb-28">
              <div className="insta font-AvenirMedium lg:flex lg:flex-row lg:pl-10">
                <img
                  src={igIcon}
                  alt="iconInstagram"
                  className="lg:w-1/6 lg:pr-2"
                />
                <div className="username">
                  <a
                    href="https://www.instagram.com/krump.krump.krump/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="lg:text-lg xl:text-2xl">
                      {data[4]?.CreditIG}
                    </p>
                  </a>
                </div>
              </div>
              <div className="website font-AvenirMedium text-center">
                <a
                  href="https://krumpkrumpkrump.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="lg:pt-10 lg:text-lg xl:text-2xl underline">
                    {data[4]?.CreditLink}
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="HoejreContent">
            <div className="Photo sm:flex sm:flex-col sm:items-center">
              <img
                src={JulienPhoto}
                alt="CreditPhoto"
                className="lg:w-3/4 xl:w-full"
              />
            </div>
          </div>
        </div>

        <div className="SmallScreen sm:flex sm:flex-col sm:items-center lg:hidden">
          <div className="overskrift sm:py-10 md:py-16">
            <h1 className="font-Ermitial sm:text-3xl md:text-4xl">
              ILLUSTRATIONS
            </h1>
          </div>

          <div className="Photo sm:flex sm:flex-col sm:items-center">
            <img src={JulienPhoto} alt="CreditPhoto" className="sm:w-3/4" />
          </div>
          <div className="Tekst sm:pt-5 sm:pb-12 md:pb-20">
            <div className="insta font-AvenirMedium sm:flex sm:flex-row sm:pl-10 sm:py-5">
              <img
                src={igIcon}
                alt="iconInstagram"
                className="sm:w-1/6 sm:pr-2"
              />
              <div className="username">
                <a
                  href="https://www.instagram.com/krump.krump.krump/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="md:text-lg">krump.krump.krump</p>
                </a>
              </div>
            </div>
            <div className="website font-AvenirMedium text-center">
              <a
                href="https://krumpkrumpkrump.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="md:text-lg underline">krump.krump.krump.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditSection;
