import React from "react";
import { useRef, useEffect } from "react";
import MagicHermitAnimation from "./FrontpageMedia/MagicHermit.mp4";
import CTAbutton from "../CTAbutton";

function AboutSection({ data }) {
  const videoRef = useRef(null);

  //useffekt kontrollerer videoelementet som først vises frem når den fetchede data er tilgængelig, derfor har jeg sat dataen som dependencyarrayet
  //ellers kommer der en error om at den ikke kan finde den specifikke data jeg viser frem herinde, selvom videoen er loadet, så resten af indholdet skal først loades når dataen er loadet, for at undgå det her errors med at dataen er undefined, da dataen herinde ikke når at få en "værdi" på sig før resten af indholdet allerede bliver loadet.
  useEffect(() => {
    const videoElement = videoRef.current;

    //hvis dataen eksisterer så kører vi videoen
    if (data && data.length >= 3) {
      videoElement.play();
    }
  }, [data]);

  //hvis dataen ikke er defineret eller hvis dataen har en længde på mindre end 2 (hvilket ingen af mine objekter har), så skal der ikke render's noget
  if (!data || data.length < 2) {
    return null;
  }

  return (
    <div className="main  lg:flex lg:flex-row-reverse text-white sm:pt-10 md:pt-0">
      <div className="Hoejre lg:flex-1 lg:mt-16">
        <div className="tekst sm:text-center sm:px-5 md:px-0 lg:pl-3 lg:py-2 lg:text-left lg:border-l-4 xl:pl-5 ">
          <div className="overskrift font-Ermitial  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <h1 className="lg:pr-10 xl:pr-28">
              {data[2].thirdSectionOverskrift}
            </h1>
          </div>
          <div
            className="broedtekst font-AvenirMedium 
          sm:text-md md:text-lg md:px-20 lg:px-0 xl:text-2xl xl:pt-2"
          >
            <p className="lg:pr-28 xl:pr-40">{data[2].thirdSectionTekst}</p>
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
