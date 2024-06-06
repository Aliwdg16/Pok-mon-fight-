import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" onClick={handleToggle}>
      <div className="accordion-header">
        <h3 className="text-xl font-bold">{title}</h3>
        <span
          className={`icon ${
            isOpen ? "icon-chevron-up" : "icon-chevron-down"
          } `}
        />
      </div>
      <div
        className={`accordion-content ${
          isOpen ? "animate-slide-down" : "animate-slide-up"
        } pt-0`}
        style={{ maxHeight: isOpen ? "1000px" : "0px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
