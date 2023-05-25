import React from "react";
import { useState } from "react";

function Accordion({ title, content, content2 }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main sm:border-b-2 rounded-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={handleToggle}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          {content}
          <br></br>
          {content2}
        </div>
      )}
    </div>
  );
}

export default Accordion;
