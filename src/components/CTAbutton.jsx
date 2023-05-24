import React from "react";
import { useHistory } from "react-router-dom";

function CTAbutton({ buttonText, to }) {
  const history = useHistory(); //useHistory() bruges til at navigere brugeren rundt. Push-metode medfølger for at redirecte brugeren til en specifik side.

  const handleClick = () => {
    history.push(to); //"to" prop til URL-destinationen
  };

  return (
    <div className="CTAbutton">
      <button
        onClick={handleClick}
        className="hover:scale-110 transition-transform duration-200 ease-in bg-orange text-white font-AvenirMedium    xl:px-18 xl:text-2xl md:px-16 md:py-4 md:text-xl sm:text-lg sm:py-3 sm:px-14 sm:rounded-md"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default CTAbutton;
