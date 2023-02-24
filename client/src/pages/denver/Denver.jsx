import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Denver.css";
import Search from "../../components/searchLocate/Search";
import AboutSlideIn from "../../components/aboutSlideIn/AboutSlideIn";
import bellImg from "../../assets/images/churchBell.jpg";
import personImg from "../../assets/images/denverPerson.jpg";
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
<<<<<<< HEAD
      <section id="denver_showcase">
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">YOUTH RETREAT</h1>
          <p className="date focus-in-contract-bck">SUNDAY: 9,11 AM & 6:30PM</p>
          <Search />
        </div>
=======
      <section id="about_showcase">
        <h1 className="focus-in-contract-bck">
          YOUTH & YOUNG ADULTS RETREAT
        </h1>
        <p className="date focus-in-contract-bck">SUNDAY: 9,11 AM & 6:30PM</p>
        <Search />
>>>>>>> 464c81fd5a856295a6c5dece5b300ad1f250358c
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
              <img src={bellImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">HOH Church Young Adults</p>
                <p>Finf our service time and direction to our locations</p>
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
            <h2>STEFAN GUZOWSKI</h2>
            <p>
              I first started coming to Flatirons when a coworker invited me in
              2008 but it was a trip to Afghanistan that changed my life
              forever. After an internship here where I met my wife, Mollie, I
              came on staff in January 2014. We have two twin babies, Bear and
              Elliot, and my "little brother" from Big Brothers Big Sisters just
              graduated high school. I love Denver and our relentless pursuit to
              reach this community and tell them about Jesus' love.
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
          <h2>Events @ Denver Campus</h2>
          <div className="card_wrapper">
            <div className="card">
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
            </div>
            <div className="card">
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
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Denver;
