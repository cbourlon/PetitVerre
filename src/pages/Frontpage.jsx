import React from "react";
import HermitDrinkingSection from "../components/FrontpageComponents/HermitDrinkingSection";
import BeerPreviewSection from "../components/FrontpageComponents/BeerPreviewSection";
import AboutSection from "../components/FrontpageComponents/AboutSection";
import ContactSection from "../components/FrontpageComponents/ContactSection";

function Frontpage() {
  return (
    <main className="container" style={{ margin: "0 auto" }}>
      <div className="HermitDrinkingSection md:pb-44">
        <HermitDrinkingSection />
      </div>

      <div className="BeerPreviewSection md:pb-20">
        <BeerPreviewSection />
      </div>

      <div className="AboutSection md:pb-20">
        <AboutSection />
      </div>

      <div className="ContactSection sm:pt-20 md:pt-10 lg:pt-20">
        <ContactSection />
      </div>
    </main>
  );
}
export default Frontpage;
