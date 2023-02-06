import "./Faq_care.css";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { careData } from "./data";

const Faq_care = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section id="faq1">
      <IconContext.Provider
        value={{
          color: "#b5192a",
          size: "2rem",
          fontWeight: "700",
        }}
      >
        <div className="faq_wrapper">
          <h1>FAQ</h1>
          {careData.map((item, index) => {
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
                  <p>{item.answer1}</p>
                  <p>{item.answer2}</p>
                  <p>{item.answer3}</p>
                  <p>{item.answer4}</p>
                  <p>{item.answer5}</p>
                  <p>{item.answer6}</p>
                  <p>{item.answer7}</p>
                  <p>{item.answer8}</p>
                  <p>{item.answer9}</p>
                  <p>{item.answer10}</p>
                  <p>{item.answer11}</p>
                  <p>{item.answer12}</p>
                </div>
              </div>
            );
          })}
        </div>
      </IconContext.Provider>
    </section>
  );
};

export default Faq_care;
