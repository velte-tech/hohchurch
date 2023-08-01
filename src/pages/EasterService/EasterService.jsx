import React from "react";
import { Link } from "react-router-dom";
import "./EasterService.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Search from "../../components/searchLocate/Search";
import AboutSlideIn from "../../components/aboutSlideIn/AboutSlideIn";
import donateImg from "../../assets/images/donate.jpg";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

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
    <div id="super">
      <section id="about_showcase">
        <div className="showcase_wrapper">
          <h1 className="focus-in-contract-bck">EASTER SERVICE</h1>
          <p className="date focus-in-contract-bck">SUNDAY: 11AM</p>
          {/* <Search /> */}
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
            <p>HOH EASTER SERVICE</p>
            <p>
              Easter retreat at Highway Of Holiness Church has alot to offer by
              bringing young people of all walks of life to connect with each
              other in the name name of out lord and saviour Jesus Christ.
            </p>
            <Link to="/contact" className="btn">
              VISIT OUR LOCATION
            </Link>
          </div>

          <div className="right">
            <AboutSlideIn />

            <div
              className="card"
              data-aos-delay="900"
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
            >
              <img src={donateImg} alt="" />
              <div className="text">
                <p className="hover_overlay ">GIVING @ HoH</p>
                <p>Support the work of God, for in giving shall ye receive.</p>
                <Link to="/About_HOH" className="linkAnima">
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

      {/* <section id="aurora_events">
        <h1 className="focus-in-contract-bck">Easter Events</h1>
      </section> */}
      <ScrollToTop />
    </div>
  );
};

export default Aurora;
