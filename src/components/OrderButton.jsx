import React from "react";
import { useHistory } from "react-router-dom";

function OrderButton({ buttonText, to }) {
  const history = useHistory(); //useHistory() bruges til at navigere brugeren rundt. Push-metode medfølger for at redirecte brugeren til en specifik side.

  const handleClick = () => {
    history.push(to); //"to" prop til URL-destinationen
  };

  return (
    <div className="OrderButton">
      <button
        onClick={handleClick}
        className="shadow-lg shadow-grey hover:scale-110 transition-transform duration-200 ease-in bg-white text-bgBlack font-AvenirHeavy sm:text-lg sm:py-2 sm:px-16 sm:rounded-md md:py-3 md:px-20 md:text-xl"
      >
        {buttonText}
      </button>
    </div>
  );
}
export default OrderButton;
