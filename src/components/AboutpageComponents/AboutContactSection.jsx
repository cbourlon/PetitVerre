import React from "react";
import CTAbutton from "../CTAbutton.jsx";

function AboutContactSection({ data }) {
  return (
    <div className="main text-white sm:pt-24 lg:pt-32 lg:pb-16  ">
      <div className="content sm:pb-20">
        <h1 className="font-Ermitial text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {data[5]?.ContactOverskrift}
        </h1>
        <h2 className="text-center font-AvenirMedium sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {data[5]?.ContactUnderoverskrift}
        </h2>
        <div className="contactButton flex flex-col items-center sm:pt-9 md:pt-9 lg:pt-12 xl:pt-14">
          <CTAbutton buttonText="CONTACT US" to="/contact" />
        </div>
      </div>
    </div>
  );
}

export default AboutContactSection;
