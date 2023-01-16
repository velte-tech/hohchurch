import React from 'react';
import { Link } from 'react-router-dom';

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
                <p className="hover_overlay ">GROUP LEADER AND APPLICATION</p>
                <p>Find our service time and direction to our locations</p>
                <Link className="linkAnima">
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
                <p className="hover_overlay ">CAMPUS UPDATES</p>
                <p>Finf our service time and direction to our locations</p>
                <Link className="linkAnima">
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
  )
}

export default AboutSlideIn