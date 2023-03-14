import React from "react";
import { Link } from "react-router-dom";

import churchImg from "../../assets/images/church.jpg";
import updateImg from "../../assets/images/aboutUpdate.jpg";

function AboutSlideIn() {
  return (
    <>
      <div
        className="card"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-anchor-placement="center-bottom"
      >
        <img src={churchImg} alt="" />
        <div className="text">
          <p className="hover_overlay ">Leadership @ HOH-Chruch</p>
          <p>Meet the elders and leader of Highway of Holiness Church.</p>
          <Link to="/Leadership" className="linkAnima">
            Learn More <span className="arrow"></span>
          </Link>
        </div>
      </div>

      <div
        className="card"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-anchor-placement="center-bottom"
      >
        <img src={updateImg} alt="" />
        <div className="text">
          <p className="hover_overlay ">HoH UPDATES</p>
          <p>Get update from Highway of Holiness Church.</p>
          <Link to="/newsletter" className="linkAnima">
            Learn More <span className="arrow"></span>
          </Link>
        </div>
      </div>

      <div
        className="shape"
        data-aos="slide-left"
        data-aos-anchor-placement="center-bottom"
      ></div>
    </>
  );
}

export default AboutSlideIn;
