import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './aboutya.css'
import { yaData } from "./data";


const Aboutya = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
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
        <div className="faq-wrapper">
          {/* <h1>FAQ</h1> */}
          {yaData.map((item, index) => {
            return (
              <div className="accordion">
                <div className="question" onClick={() => toggle(index) } key={index}>
                  <p>{item.question}</p>

                    <span className={clicked === index ? "activated" :""}> <MdOutlineKeyboardArrowDown />
                  </span>
                </div>

                <div className={clicked === index ? "dropdown" :" dropdown  drop"}>
                        <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </IconContext.Provider>
    </section>
      
  )
}

export default Aboutya