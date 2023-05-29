import React from "react";

function CloseButton({ onClick, buttonText }) {
  return (
    <button>
      <button
        onClick={onClick}
        className="hover:scale-110 transition-transform duration-200 ease-in bg-bgBlack text-white font-AvenirMedium  xl:px-18 xl:text-2xl md:px-16 md:py-4 md:text-xl sm:text-lg sm:py-3 sm:px-14 sm:rounded-md"
      >
        {buttonText}
      </button>
    </button>
  );
}
export default CloseButton;
