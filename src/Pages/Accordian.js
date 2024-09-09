import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { FaMinusCircle } from "react-icons/fa";
import "../Style/Style.css"

const Accordian = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div
        className="accordion-title flex justify-between items-center cursor-pointer py-3 uppercase"
        onClick={toggleAccordion}
        style={{
          borderBottom: isOpen ? "none" : "1px solid #ddd",
        }}
      >
        <span className="md:text-base text-sm font-medium">{title}</span>
        <span>{isOpen ? <FaMinusCircle size={23} color="#1A432E"/> : <FiPlusCircle size={22}/>}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div
          className="accordion-content md:text-base text-sm"
          style={{
            borderBottom: "1px solid #ddd",
            color: "#667085"
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordian;
