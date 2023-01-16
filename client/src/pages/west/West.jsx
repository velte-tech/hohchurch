import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./west.css";
import Search from '../../components/searchLocate/Search';
import AboutSlideIn from '../../components/aboutSlideIn/AboutSlideIn';
import westImg from "../../assets/images/westVolunteer.jpg";
import westPastorImg from "../../assets/images/longmont_pastor.jpg";
import familyNightImg from "../../assets/images/family_night.jpg";
import openHouseImg from "../../assets/images/open_house.jpg";
import hikingImg from "../../assets/images/hiking.jpg";
import marriageImg from "../../assets/images/marriage.jpg";


const West = () => {
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
      <h1>DENVER</h1>
      <p className='date'>SUNDAY: 9 & 11AM</p>
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
        </div>

        <div className="right">

          <AboutSlideIn />

          <div
            className="card"
            data-aos-delay="900"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={westImg} alt="" />
            <div className="text">
              <p className="hover_overlay ">VOLUNTEER @ West</p>
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

{/* ======= WEST_EVENTS SECTION =======     */}
    <section id="wester_ministries">
        <div className="about_welcome container">
          <h2>ministries</h2>
          <div className="right">
            <div className="card">
              <img src={familyNightImg} alt="" />
              <div className="text">
                <p className="hover_overlay">SLICK CITY FAMILY NIGHT <br/> 1/19/2023</p>
                <p>
                Get ready for a night of community and FUN!!!   Join the...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={openHouseImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">GET CONNECTED OPEN HOUSE<br/>01/22/2023</p>
                <p>
                Join us for an Open House to learn more about Men's Connect and Women's...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
            <div className="card">
              <img src={hikingImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">COMMUNITY HIKE<br/>02/04/2023</p>
                <p>
                Join West Campus for a Winter Hike at Elk Meadow Park in Evergreen. The...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>  <div className="card">
              <img src={marriageImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">DO MARRIAGE BETTER!<br/>02/10/2023</p>
                <p>
                Do Marriage Better! is a date night for couples. Join us Friday, Feb...
                </p>
                <Link to="/about" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ======= west_reach section ======= */}
      <section id="west_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={westPastorImg}
              alt=""
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="600"
            />
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-anchor-placement="top center"
          >
            <h2>BRAD RICCA</h2>
            <p>West Campus Pastor</p>
            <p>
            In 2019, Kim and I, and our children, Sarah Jane, Elijah, Ezekiel, and SoliDeo packed up our home. We left Kentucky to be part of what God is doing through Flatirons. Leaving family and friends was hard, but coming to Colorado has been so good. I first served on the Global Outreach team leading our work with international partners around the globe. Now, my family and I are with you West as we bring the awesome life of Christ to a lost and broken world.
            </p>
            <Link className="linkAnima" to="/contact">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>
  </div>
  );
};

export default West;
