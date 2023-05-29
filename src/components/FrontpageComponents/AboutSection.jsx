import React from "react";
import { useRef, useEffect } from "react";
import MagicHermitAnimation from "./FrontpageMedia/MagicHermit.mp4";
import CTAbutton from "../CTAbutton";

function AboutSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div className="main  lg:flex lg:flex-row-reverse text-white sm:pt-10 md:pt-0">
      <div className="Hoejre lg:flex-1 lg:mt-16">
        <div className="tekst sm:text-center sm:px-5 md:px-0 lg:pl-3 lg:py-2 lg:text-left lg:border-l-4 xl:pl-5 ">
          <div className="overskrift font-Ermitial  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <h1 className="lg:pr-10 xl:pr-28">ENTER THE WORLD OF L’ERMITAGE</h1>
          </div>
          <div
            className="broedtekst font-AvenirMedium 
          sm:text-md md:text-lg md:px-20 lg:px-0 xl:text-2xl xl:pt-2"
          >
            <p className="lg:pr-28 xl:pr-40">
              At Petit Verre, we believe that beer is more than just a beverage
              – it's a cultural symbol, a catalyst for connection, and a
              testament to human creativity. Get to know us!
            </p>
          </div>
        </div>
        <div className="CTAbutton flex sm:justify-center sm:py-10 lg:justify-start lg:pl-3 lg:py-3 xl:pl-4 xl:pt-">
          <CTAbutton buttonText={"ABOUT US"} to={"/about"} />
        </div>
      </div>

      <div className="videoAnimation sm:hidden lg:block lg:flex-1 xl:mt-[-90px]">
        <video
          src={MagicHermitAnimation}
          loop
          muted
          ref={videoRef}
          className="xl:w-full xl:h-auto xl:ml-20"
        ></video>
      </div>
    </div>
  );
}

export default AboutSection;
