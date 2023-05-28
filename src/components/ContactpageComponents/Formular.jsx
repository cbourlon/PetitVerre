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
      <div className="content text-white sm:pt-24 ">
        <div className="top-elements flex flex-col items-center">
          <video src={CheersAni} muted autoPlay className="sm:w-1/2"></video>
          <h1 className="font-Ermitial sm:text-6xl">CONTACT US</h1>
        </div>

        <div className="Form sm:pt-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col sm:space-y-5 "
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

            <div className="sendButton sm:pt-10 flex flex-col items-center">
              <CTAbutton buttonText="SEND" type="submit" value="Send" />
            </div>
          </form>
        </div>

        <div className="soMe flex flex-row sm:justify-center items-center sm:pt-24 sm:pr-5 sm:pb-5 sm:space-x-3">
          <div className="icon">
            <img src={igIcon} alt="iconInstagram" className="sm:max-w-xs" />
          </div>
          <div className="username">
            <a
              href="https://www.instagram.com/petitverredk/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="sm:text-xl">petitverredk</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formular;
