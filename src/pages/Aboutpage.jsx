import AboutContactSection from "../components/AboutpageComponents/AboutContactSection";
import AboutSections from "../components/AboutpageComponents/AboutSections";
import CreditSection from "../components/AboutpageComponents/CreditSection";
import PetitVerreSection from "../components/AboutpageComponents/PetitVerreSection";
import HermitSection from "../components/AboutpageComponents/HermitSection";
import LermitageSection from "../components/AboutpageComponents/LermitageSection";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../style/Aboutpage.css";
import HermitSerious from "../components/AboutpageComponents/AboutpageMedia/HermitExtraImg.png";

function Aboutpage() {
  const [isPetitVerreSectionVisible, setisPetitVerreSectionVisible] =
    useState(false);
  const [isHermitSectionVisible, setisHermitSectionVisible] = useState(false);
  const [isLermitageSectionVisible, setisLermitageSectionVisible] =
    useState(false);
  const [isCreditSectionVisible, setisCreditSectionVisible] = useState(false);
  const [isAboutContactVisible, setisAboutContactVisible] = useState(false);

  const [petitverreSectionRef, petitverreSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [hermitSectionRef, hermitSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [lermitageSectionRef, lermitageSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [creditSectionRef, creditSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [aboutContactSectionRef, aboutContactSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (petitverreSectionInView) {
        setisPetitVerreSectionVisible(true);
      }
      if (hermitSectionInView) {
        setisHermitSectionVisible(true);
      }
      if (lermitageSectionInView) {
        setisLermitageSectionVisible(true);
      }
      if (creditSectionInView) {
        setisCreditSectionVisible(true);
      }
      if (aboutContactSectionInView) {
        setisAboutContactVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    petitverreSectionInView,
    hermitSectionInView,
    lermitageSectionInView,
    creditSectionInView,
    aboutContactSectionInView,
  ]);

  return (
    <div className="main sm:pt-12 md:pt-14 lg:pt-20 xl:pt-16 ">
      <div className="Topcontent content flex justify-center flex-col items-center">
        <img
          src={HermitSerious}
          alt="OverskriftHat"
          className="sm:w-44 md:w-48 lg:w-60"
        />

        <div className="Overskrifter text-center md:mt-0 sm:flex sm:flex-col sm:justify-center ">
          <h1 className="font-Ermitial sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white">
            MORE ABOUT US
          </h1>

          <h2 className="font-AvenirMedium sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
            Unveiling the story behind our journey of excellence.
          </h2>
        </div>
      </div>

      <div
        ref={petitverreSectionRef}
        className={`fade-in ${petitverreSectionInView ? "visible" : ""}`}
      >
        <PetitVerreSection />
      </div>

      <div
        ref={hermitSectionRef}
        className={`fade-in ${hermitSectionInView ? "visible" : ""}`}
      >
        <HermitSection />
      </div>

      <div
        ref={lermitageSectionRef}
        className={`fade-in ${lermitageSectionInView ? "visible" : ""}`}
      >
        <LermitageSection />
      </div>

      <div
        ref={creditSectionRef}
        className={`fade-in ${creditSectionInView ? "visible" : ""}`}
      >
        <CreditSection />
      </div>
      <div
        ref={aboutContactSectionRef}
        className={`fade-in ${aboutContactSectionInView ? "visible" : ""}`}
      >
        <AboutContactSection />
      </div>
    </div>
  );
}

export default Aboutpage;
