import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function ServeComponent(props) {
  const [reveal, setReveal] = useState(false);

  const detailRef = useRef();

  if (detailRef.current) console.log(detailRef.current.scrollHeight);

  return (
    <div className="s_card">
      <div className="cards_img">
        <img src={props.img} alt="" />
      </div>
      <div className="bottom">
        <h3>{props.head}</h3>
        <div className="links">
          {/* <a href="/give" className="linkAnima">
            {props.text_1}
            <span className="arrow"></span>
          </a> */}
          <Link className="linkAnima" onClick={() => setReveal(!reveal)}>
            {props.text_2}
            <span className="arrow"></span>
          </Link>
        </div>
        <div
          className="details"
          ref={detailRef}
          style={
            reveal
              ? {
                  height: detailRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          <p>{props.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default ServeComponent;
