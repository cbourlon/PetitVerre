import React from "react";
import CTAbutton from "../CTAbutton";
import TheHat from "./FrontpageMedia/TheHat.png";

function ContactSection() {
  return (
    <div className="main text-white">
      <div className="Overskrifter sm:text-center">
        <div className="overskrift font-Ermitial sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <h1>LET’S GET IN TOUCH</h1>
        </div>
        <div className="underoverskrift font-AvenirMedium sm:text-md md:text-lg lg:text-2xl">
          <h2 className="sm:px-16">
            Ready to embark on a beer-filled adventure? We'd love to hear from
            you!
          </h2>
        </div>
      </div>
      <div className="CTAcontact flex lg:pt-20 md:pt-14 sm:pt-10 sm:justify-center items-center">
        <CTAbutton
          buttonText={"CONTACT US"}
          to={"/contact"}
          className="sm:z-0"
        />
      </div>

      <div className=" xl:-translate-x-32 lg:-translate-y-32 md:-translate-y-28 sm:-translate-y-24">
        <img
          src={TheHat}
          alt="Hat illustration"
          className=" xl:mr-96 lg:mr-72 lg:w-28 lg:h-28 md:rotate-45 md:ml-auto md:mr-52 md:w-24 md:h-24 sm:ml-20 sm:w-20 sm:h-20 sm:-rotate-45 sm:z-10 transform"
        />
      </div>
    </div>
  );
}

export default ContactSection;
