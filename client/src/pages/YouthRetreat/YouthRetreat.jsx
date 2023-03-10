import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./YouthRetreat.css";
import Search from "../../components/searchLocate/Search";
import AboutSlideIn from "../../components/aboutSlideIn/AboutSlideIn";
import bellImg from "../../assets/images/churchBell.jpg";
import personImg from "../../assets/images/ya22.jpeg";
import breakfast from "../../assets/images/breakfast.jpg";
import comingSoon from "../../assets/images/comingSoon.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

const Denver = () => {
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
    <div id="super">
      <section id="denver_showcase">
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">
            Changed Lives - Youth and young adults retreat
          </h1>
          {/* <p className="date focus-in-contract-bck">SUNDAY: 9,11 AM & 6:30PM</p> */}
          <Search />
        </div>
      </section>

      <section>
        <div className="about_welcome">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <p>ABOUT US</p>
            <p>
              Youth retreat at Highway Of Holiness Church has alot to offer by
              bringing young people of all walks of life to connect with each
              other in the name name of our lord and saviour Jesus Christ.
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
              <img src={bellImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">HOH-Church Young Adults</p>
                <p>Joins us and connect with the family.</p>
                <Link to="/Young_adults" className="linkAnima">
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

      <section id="denver_reach">
        <div className="reach_wrapper">
          <div className="left">
            <img
              src={personImg}
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
            <h2>YOUTH RETREAT</h2>
            <p>
              Yought Retreat started at Highway Of Holiness church to focus on
              bringingthe young people of Highway Of Holiness church together
              and learn more about the changing society and to up-lift the young
              generation. reach this community and tell them about Jesus' love.
            </p>
            <Link className="linkAnima">
              Contact <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ======= SECTION: DENVER_EVENTS ======= */}
      <section id="denver_events">
        <div className="denver_events_wrapper">
          <h2> Changed Lives - Youth and Young Adults Retreat</h2>
          <div className="card_wrapper">
            {/* <div className="card">
              <img src={breakfast} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  PANCAKE BREAKFAST <br />
                  JANUARY 15, 2023
                </p>
                <p>
                  Pancake Day! Join us for a Pancake Breakfast on the 3rd Sunday
                  of...
                </p>
                <Link to="/" className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div> */}
            {/* <div className="card">
              <img src={comingSoon} alt="" />
              <div className="text">
                <p className="hover_overlay ">
                  COMING <br />
                  SOON!
                </p>
                <p>
                  Coming Soon! Connect - Every Thursday. A place to connect,
                  make new...
                </p>
                <Link className="linkAnima">
                  Learn More <span className="arrow"></span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Denver;
