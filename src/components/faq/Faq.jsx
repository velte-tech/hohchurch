import React, { useState } from "react";
import { faqData } from "./data";
import "./faq.css";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const Dropdown = styled

function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
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
          <h1>Do You Have Any Questions</h1>
          {/* {faqData.map((item, index) => {
            return (
              <div className="accordion">
                <div
                  className="question"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <p>{item.question}</p>

                  <span className={clicked === index ? "activated" : ""}>
                    {" "}
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
                <div
                  className={clicked === index ? "dropdown" : " dropdown  drop"}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })} */}
        </div>
      </IconContext.Provider>
    </section>
  );
}

export default Faq;
