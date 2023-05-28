import React from "react";
import CheersAni from "./ContactpageMedia/CheersAnimation.mp4";
import igIcon from "./ContactpageMedia/IgIconWhite.png";
import CTAbutton from "../CTAbutton.jsx";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Formular() {
  //https://www.emailjs.com/docs/examples/reactjs/
  //EmailJS integration
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="content text-white sm:pt-40 md:pt-20">
        <div className="top-elements flex flex-col items-center">
          <video
            src={CheersAni}
            muted
            autoPlay
            className="sm:w-1/2 lg:w-1/3 xl:w-1/3"
          ></video>
          <h1 className="font-Ermitial sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
            CHEERS WITH US
          </h1>
          <h2 className="text-center font-AvenirMedium md:text-2xl lg:text-3xl">
            Contact us on{" "}
            <span className="underline">orders@petitverre.dk</span> or fill the
            form below
          </h2>
        </div>

        <div className="Form sm:pt-20 md:pt-28 lg:pt-32 xl:pt-40 lg:px-10 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col sm:space-y-5 md:px-20 lg:px-52 xl:px-96"
          >
            <div className="nameDiv flex flex-col sm:px-10">
              <label className="text-grey font-AvenirMedium sm:text-xl">
                Name
              </label>
              <input
                className=" bg-bgBlack outline-none border-b-2 border-b-white border-opacity-40 sm:pt-4"
                type="text"
                name="user_name"
              />
            </div>

            <div className="emailDiv flex flex-col sm:px-10 sm:pt-10">
              <label className="text-grey font-AvenirMedium sm:text-xl">
                Email
              </label>
              <input
                className=" bg-bgBlack outline-none border-b-2 border-b-white border-opacity-40 sm:pt-4"
                type="email"
                name="user_email"
              />
            </div>
            <div className="subjectDiv flex flex-col sm:px-10 sm:pt-10">
              <label className="text-grey font-AvenirMedium sm:text-xl">
                Subject
              </label>
              <input
                className=" bg-bgBlack outline-none border-b-2 border-b-white border-opacity-40 sm:pt-4"
                type="subject"
                name="user_subject"
              />
            </div>
            <div className="messageDiv flex flex-col sm:px-10 sm:pt-10">
              <label className="text-grey font-AvenirMedium sm:text-xl">
                Message
              </label>
              <textarea
                className=" bg-bgBlack outline-none border-b-2 border-b-white border-opacity-40 sm:pt-14"
                name="message"
              />
            </div>

            <div className="sendButton sm:pt-10 md:pt-10 lg:pt-10 flex flex-col items-center">
              <CTAbutton buttonText="SEND" type="submit" value="Send" />
            </div>
          </form>
        </div>

        <div className="soMe flex flex-row sm:justify-center items-center sm:pt-14 sm:pr-5 sm:pb-10 sm:space-x-3 md:pb-10 md:pt20 lg:justify-end lg:pr-14 xl:pr-10">
          <div className="icon">
            <img src={igIcon} alt="iconInstagram" className="sm:max-w-xs" />
          </div>
          <div className="username">
            <a
              href="https://www.instagram.com/petitverredk/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="sm:text-xl underline">@petitverredk</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formular;
