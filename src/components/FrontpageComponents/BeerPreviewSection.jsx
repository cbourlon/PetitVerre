import React from "react";
import { Parallax } from "react-parallax";
import IpaPreview from "./FrontpageMedia/IpaPreview.png";
import PaleAlePreview from "./FrontpageMedia/PaleAlePreview.png";
import SourPreview from "./FrontpageMedia/SourPreview.png";
import PXBG from "./FrontpageMedia/PXBGBeerPreview.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CTAbutton from "../CTAbutton";
import "./BeerPreview.css";

function BeerPreviewSection() {
  return (
    <div className="main  sm:pt-28 sm:pb-20 md:pt-48 lg:pt-40">
      <Parallax
        blur={0}
        bgImage={PXBG}
        strength={300}
        className="parallax-section bg-cover"
      >
        <div className="Overskrifter text-white text-center sm:pb-5">
          <div className="overskrift font-Ermitial sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl">
            <h1>VINOUS, POWERFUL, MAGICAL</h1>
          </div>

          <div className="underoverskrift font-AvenirMedium sm:text-md md:text-lg lg:text-xl xl:text-3xl xl:pt-2">
            <h2>Explore our selection of beers, services and products</h2>
          </div>
        </div>

        <div className="Beers font-Ermitial text-white flex xl:space-x-52 lg:flex-row lg:space-y-0 lg:space-x-28 lg:justify-center lg:py-14 sm:flex-col sm:space-y-14 sm:items-center sm:py-10">
          <div className="ipa hover:scale-110 transition-transform duration-200 ease-in">
            <div className="ipaAni">
              <Link to="/products?filter=All" className="hover:opacity-100">
                <img src={IpaPreview} alt="Ipa Preview" />
              </Link>
            </div>
            <div className="ipatext sm:text-center sm:text-3xl sm:pt-2">
              <p>IPA</p>
            </div>
          </div>

          <div className="paleale hover:scale-110 transition-transform duration-200 ease-in">
            <div className="palealeAni">
              <Link to="/products?filter=All" className="hover:opacity-100">
                <img
                  src={PaleAlePreview}
                  alt="Pale Ale Preview"
                  className="hover:opacity-100"
                />
              </Link>
            </div>
            <div className="palealetext sm:text-center sm:text-3xl sm:pt-2">
              <p>PALE ALE</p>
            </div>
          </div>

          <div className="sour hover:scale-110 transition-transform duration-200 ease-in ">
            <div className="sourani">
              <Link to="/products?filter=All" className="hover:opacity-100">
                <img src={SourPreview} alt="Sour Preview" />
              </Link>
            </div>
            <div className="sourtext sm:text-center sm:text-3xl sm:pt-2">
              <p>SOUR</p>
            </div>
          </div>
        </div>

        <div className="exploreButton flex justify-center ">
          <Link to="/products?filter=All" className="hover:opacity-100">
            <CTAbutton buttonText="EXPLORE" />
          </Link>
        </div>
      </Parallax>
    </div>
  );
}
export default BeerPreviewSection;
