import React, { useState } from "react";
import { faqData } from "./data";
import "./faq.css";
import { IconContext } from "react-icons";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// const Dropdown = styled

function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if(clicked === index) {
        return setClicked(null)
    }
    setClicked(index)
  };

  return (
    <section id="faq">
      <IconContext.Provider
        value={{
          color: "#b5192a",
          size: "2rem",
          fontWeight: "700",
        }}
      >
        <div className="faq_wrapper">
          <h1>FAQ</h1>
          {faqData.map((item, index) => {
            return (
              <div className="accordion">
                <div className="question" onClick={() => toggle(index) } key={index}>
                  <p>{item.question}</p>
                  <span > {clicked === index ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                  </span>
                </div>

                <div className="dropdown">
                    {clicked === index ? (
                        <p>{item.answer}</p>

                    ): null}
                </div>
              </div>
            );
          })}
        </div>
      </IconContext.Provider>
    </section>
  );
}

export default Faq;
