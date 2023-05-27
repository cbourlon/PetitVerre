import React from "react";
import HermitSerious from "./AboutpageMedia/HermitExtraImg.png";
import "./AboutSectionsStyle.css";

function AboutSections() {
  return (
    <div className="main text-white sm:pt-36 md:pt-32 lg:pt-32 ">
      <div className="content flex justify-center flex-col items-center">
        <img src={HermitSerious} alt="OverskriftHat" className="sm:w-1/4" />

        <div className="Overskrifter text-center sm:flex sm:flex-col sm:justify-center ">
          <h1 className="font-Ermitial sm:text-5xl">ABOUT US</h1>

          <h2 className="font-AvenirMedium sm:text-lg">
            Unveiling the story behind our journey of excellence.
          </h2>

          <div className="Sektioner sm:pt-24">
            <div className="PetitVerre">
              <h1>PETIT VERRE</h1>
            </div>

            <div className="Lermitage">
              <h1>L'ERMITAGE</h1>
            </div>

            <div className="TheHermit">
              <h1>THE HERMIT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSections;
