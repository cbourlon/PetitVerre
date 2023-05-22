import React, { useEffect } from "react";
import { useRef } from "react";
import AniDrinkingHermit from "../FrontpageComponents/DrinkingHermit.mp4";
import "./HermitDrinkingStyle.css";
import Line from "./Line.png";

function HermitDrinkingSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div className="container  md:py-5 md:pr-20 md:bg-orange md:flex-row sm:py-2 text-white flex sm:flex-col sm:justify-center relative">
      <div className="Tekst md:z-10 relative ">
        <h1 className="font-Ermitial md:px-10 md:text-left md:text-7xl sm:text-6xl sm:text-center sm:pt-10">
          PETIT VERRE
        </h1>
        <h2 className="font-AvenirMedium md:pr-56 md:pt md:text-left md:text-lg sm:text-center sm:px-10">
          Discover the stories behind the labels as we uncover the story of
          Hermit. Our beer showcase website is a gateway to a cornucopia of
          flavors, featuring rare brews, limited editions, and unique
          collaborations.
        </h2>
      </div>

      <div className="DrinkingHermitAnimation md:max-w-lg md:max-w-lg md:right-0 md:top-0 md:z-0 md:absolute  md:px-0 md:pt-0 sm:px-4 sm:pt-10">
        <video
          src={AniDrinkingHermit}
          ref={videoRef}
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  );
}

export default HermitDrinkingSection;
