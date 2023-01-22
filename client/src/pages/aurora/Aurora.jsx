import React from 'react';
import { Link } from 'react-router-dom';
import './Aurora.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Search from '../../components/searchLocate/Search';
import AboutSlideIn from '../../components/aboutSlideIn/AboutSlideIn';
import bellImg from "../../assets/images/churchBell.jpg";

const Aurora = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        // offet: 1000,
      },
      []
    );
  });
  return (
    <div id='super'>
      <section id="about_showcase">
        <h1 className='focus-in-contract-bck'>AURORA</h1>
        <p className='date focus-in-contract-bck'>SUNDAY: 9 & 11AM</p>
        <Search />
      </section>

      <section>
      <div className="about_welcome">
          <div 
          className="left"
          data-aos="fade-right" 
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
          >
            <p>
              ABOUT US
            </p>
            <p>
              We're a church that meets at five locations around Denver, and
              online. Join us for an in-person service or online
            </p>
            <Link className='btn'>PASSANGER DROP-OFF SIGN</Link>
          </div>

          <div className="right">

            <AboutSlideIn />

            <div
              className="card"
              data-aos-delay="900"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={bellImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">GIVING @ AURORA</p>
                <p>Finf our service time and direction to our locations</p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div
              className="shape"
              data-aos="slide-left"
              data-aos-anchor-placement="center-bottom"
            ></div>
          </div>
        </div>
      </section>

      <section id="aurora_events">
        <h1 className='focus-in-contract-bck'>Events @ Aurora Campus</h1>
      </section>
    </div>
  )
}

export default Aurora