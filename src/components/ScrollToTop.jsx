import React from "react";
import { useEffect, useState } from "react";
import arrowUp from "../media/logo/arrowUpBlack.png";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 ${
        showButton ? "block" : "hidden"
      } p-3 rounded-full bg-gray-800 text-bgBlack`}
      onClick={scrollToTop}
    >
      <div className=" bg-white  sm:p-1 rounded-lg flex flex-col items-center">
        <img src={arrowUp} alt="arrowIcon" className="sm:w-2/3" />
      </div>
    </button>
  );
}

export default ScrollToTop;
