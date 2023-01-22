import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./Im_new.css";
import slideImage from "../../assets/images/newExpect.png"
import Faq from '../../components/faq/Faq';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

// import mapImage from "../../assets/images/Figmap.png"

const Im_new = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
        once: false,
        mirror: true,
      },
      []
    );
  });
  return (
    <div>
      <section id="new_showcase">
        <div className="showcase_wrapper">
          <h1>I'M NEW</h1>
        </div>
      </section>
      
      {/* ======= SECTION : EXPECT ======= */}
      <section id="new_expect">
          <div className="left">
              <img src={slideImage} alt="slideImage" 
              data-aos="fade-right"
              />
            <div className="shape_2"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
            >

            </div>
          </div>
          <div className="right">
            <h2>What to expect</h2>
            <p>We are a church meeting in multiple locations in the Denver-Boulder area, online, and around the world. You'll find a group of people that may look a little rough around the edges but expect to be welcomed and comfortable. We call ourselves a "me too" community and hope that you feel right at home.</p>
            <Link className='linkAnima'>OUR BELIEFS <span className="arrow"></span> </Link>
          </div>
      </section>
      <Faq />

      <section id='map'>
        <div className="ask text_center" >
          <Link className="btn" to="/cantact">DO YOU HAVE ANY<br/> QUESTIONS</Link>
        </div>
        {/* <div className="main_map">
          <img src={mapImage} alt="" />
        </div> */}
        <GoogleMap />
      </section>

    </div>
  )
}

export default Im_new