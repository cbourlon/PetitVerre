import React from "react";
import CheersAni from "./ContactpageMedia/CheersAnimation.mp4";
import igIcon from "./ContactpageMedia/IgIconWhite.png";
import checkIcon from "./ContactpageMedia/CheckIcon.png";
import CTAbutton from "../CTAbutton.jsx";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import CloseButton from "../CloseButton";

function Formular() {
  //https://www.emailjs.com/docs/examples/reactjs/
  //EmailJS integration
  const form = useRef();
  const [name, setName] = useState(""); //Værdien af name
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false); // State til popup visibility

  //Ændrer (onChange) værdien af name til hvad brugeren indtaster
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    //Vi kalder denne funktion i sendEmail funktionen, da den er kaldt på "onSubmit"
    event.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5pxb8k",
        "template_uwo4pcb",
        form.current,
        "3ffDEsGtxDcR32eyg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Set popup visibility til true
          handleSubmit(e); // Kalder på handleSubmit for at resette form'ens inputfelter.
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //Sætter visibility til false
  const closePopup = () => {
    setIsSent(false);
  };

  return (
    <div className="">
      <div className="content text-white sm:pt-20 md:pt-20">
        <div className="top-elements flex flex-col items-center">
          <video
            src={CheersAni}
            muted
            autoPlay
            className="sm:w-1/2 md:w-1/3 xl:w-1/5"
          ></video>
          <h1 className="font-Ermitial sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl">
            CHEERS WITH US
          </h1>
          <h2 className="text-center font-AvenirMedium md:text-2xl ">
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
                value={name}
                onChange={handleNameChange}
                required
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
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="subjectDiv flex flex-col sm:px-10 sm:pt-10">
              <label className="text-grey font-AvenirMedium sm:text-xl">
                Subject
              </label>
              <input
                className=" bg-bgBlack outline-none border-b-2 border-b-white border-opacity-40 sm:pt-4"
                type="subject"
                value={subject}
                onChange={handleSubjectChange}
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
                value={message}
                onChange={handleMessageChange}
                required
              />
            </div>

            <div className="sendButton sm:pt-10 md:pt-10 lg:pt-10 flex flex-col items-center">
              <CTAbutton buttonText="SEND" type="submit" value="Send" />
            </div>
          </form>
          {/* Popup styling, ChatGPT */}
          {isSent && (
            <div className="Popupbesked-container fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
              <div className="text-bgBlack bg-white rounded-xl p-4 shadow-lg text-center  flex flex-col items-center sm:w-3/4 sm:h-2/4 lg:w-4/6 xl:w-2/4">
                <div className="checkIcon flex flex-col items-center">
                  <img
                    src={checkIcon}
                    alt="bekraeftelsesikon"
                    className="sm:w-2/3 sm:mt-[-60px] "
                  />
                </div>
                <div className="tekst sm:pt-16 xl:pt-10">
                  <h1 className="font-Ermitial sm:text-5xl md:text-6xl xl:text-7xl">
                    MERCI!
                  </h1>
                  <p className=" font-AvenirThin sm:pt-2 md:text-xl lg:text-2xl lg:px-10 xl:pt-5 xl:px-20">
                    Your message has been sent. We will reply to you again by
                    email as soon as possible.
                  </p>
                </div>

                <div className="closeButton sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
                  <CloseButton buttonText="CLOSE" onClick={closePopup} />
                </div>
              </div>
            </div>
          )}
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
