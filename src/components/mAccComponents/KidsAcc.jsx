import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./KidsAcc.css";
function KidsAcc(props) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef();

  return (
    <div className="item">
      <div onClick={() => setIsOpen(!isOpen)} className="title">
        <p>{props.label}</p>
        <span className={isOpen ? "rotate_icon" : ""}>
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>

      <div
        className="content"
        ref={contentRef}
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight + "px" }
            : {
                height: "0px",
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
}

export default KidsAcc;
