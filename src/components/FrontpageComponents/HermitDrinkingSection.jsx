import React, { useEffect } from "react";
import { useRef } from "react";
import AniDrinkingHermit from "./FrontpageMedia/DrinkingHermit.mp4";

function HermitDrinkingSection({ data }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.play();
  }, []);

  return (
    <div className="container md:py-5 md:pr-20 md:flex-row sm:py-2 text-white flex sm:flex-col sm:justify-center relative">
      <div className="TekstBoks xl:pl-28 xl:pr-96 lg:pl-12 lg:pr-32 md:pt-10 lg:pt-16 md:pl-5">
        <div className="TekstIndhold md:z-10 relative md:border-l-8 ">
          <h1 className="font-Ermitial xl:text-9xl md:px-3 md:pt-1 md:text-left md:text-7xl sm:text-6xl sm:text-center sm:pt-16">
            {data[0].firstSectionOverskrift}
          </h1>
          <h2 className="font-AvenirMedium xl:text-3xl md:px-3 md:pb-2 md:pr-56 md:pt md:text-left md:text-lg sm:text-center sm:px-10">
            Discover the stories behind the labels as we uncover the story of
            Hermit. Our beer showcase website is a gateway to a cornucopia of
            flavors, featuring rare brews, limited editions, and unique
            collaborations.
          </h2>
        </div>
      </div>

      <div className="DrinkingHermitAnimation xl:max-w-7xl md:max-w-lg md:right-0 md:top-0 md:z-0 md:absolute  md:px-0 md:pt-0 sm:px-4 sm:pt-10">
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
